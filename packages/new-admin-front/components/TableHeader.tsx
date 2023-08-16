import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { DownOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import {
  Button,
  Col,
  Dropdown,
  Form,
  Input,
  Popconfirm,
  Row,
  Select,
  Space,
} from 'antd';

import { useManagerRecruit } from '../hooks/useManagerRecruit';
import { FormSearchItem, FormSelectItem } from '../ManagerRecruit.styles';

const StyledSpace = styled(Space)`
  .ant-dropdown {
    width: 150px;
  }

  .ant-popconfirm {
    left: -100px !important;
    width: 220px;
  }
`;

const ActionRow = styled(Row)`
  margin-bottom: 8px;
`;

const TableHeader = () => {
  const {
    menuProps,
    selectedManagerRowKeys,
    setSelectedManagerRowKeys,
    handleSearch,
  } = useManagerRecruit();

  const hasSelected = selectedManagerRowKeys.length > 0;
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleSubmit = () => {
    setLoading(true);

    // TODO action for selected row
    setTimeout(() => {
      setSelectedManagerRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickDocument = useCallback(
    (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node) && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickDocument, true);

    return () => {
      document.removeEventListener('click', handleClickDocument, true);
    };
  }, [handleClickDocument]);

  return (
    <>
      <Row>
        <Col>
          <Form layout="inline">
            <FormSelectItem>
              <Select defaultValue="ID">
                <Select.Option value="ID">지원자ID</Select.Option>
                <Select.Option value="name">이름</Select.Option>
                <Select.Option value="phone">연락처</Select.Option>
                <Select.Option value="training_manager">
                  리드매니저
                </Select.Option>
                <Select.Option value="near_stadium">가까운 구장</Select.Option>
                <Select.Option value="plabzone">플랩존</Select.Option>
              </Select>
            </FormSelectItem>
            <FormSearchItem>
              <Input.Search onSearch={handleSearch} />
            </FormSearchItem>
          </Form>
        </Col>
      </Row>
      <ActionRow align="middle" justify="end" gutter={8}>
        <Col>
          <Button
            type="primary"
            onClick={handleSubmit}
            disabled={!hasSelected}
            loading={loading}
          >
            계약서 작성
          </Button>
        </Col>
        <Col>
          <Button
            type="primary"
            onClick={handleSubmit}
            disabled={!hasSelected}
            loading={loading}
          >
            보증금 입금
          </Button>
        </Col>
        <Col>
          <StyledSpace ref={dropdownRef}>
            <Dropdown
              open={isOpen}
              menu={menuProps}
              getPopupContainer={() => dropdownRef.current as HTMLElement}
              dropdownRender={(menu) => (
                <Popconfirm
                  title="코멘트를 남겨주세요."
                  description={<Input.TextArea autoSize={{ minRows: 3 }} />}
                  onConfirm={() => setIsOpen(false)}
                  getPopupContainer={() => dropdownRef.current as HTMLElement}
                >
                  {React.cloneElement(menu as ReactElement)}
                </Popconfirm>
              )}
            >
              <Button onClick={handleClick}>
                <Space>
                  채용상태 변경
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </StyledSpace>
        </Col>
        <Col>
          <span>
            {hasSelected ? `${selectedManagerRowKeys.length}개 선택됨` : ''}
          </span>
        </Col>
      </ActionRow>
    </>
  );
};

export default TableHeader;
