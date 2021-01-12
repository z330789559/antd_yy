/** Uuid: 7adba566 title: 基本使用 desc: 基本使用情况 */
import React, {useRef} from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import {Button, Dropdown, Input, Menu} from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import './index.css';
import type { TableListItem } from './data.d';
import {ActionType, ProColumns} from "@ant-design/pro-table/lib/typing";
import {FormattedMessage} from "../TableList";
import {useIntl} from "umi";
import ProTable from "../TableList";
import {queryRule} from "../TableList/service";

const OperationList=() => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();
  const content=()=>{
      const columns: ProColumns<TableListItem>[] = [
      {
        title: (
          <FormattedMessage
            id="pages.searchTable.updateForm.ruleName.nameLabel"
            defaultMessage="规则名称"
          />
        ),
        dataIndex: 'name',
        tip: '规则名称是唯一的 key',
      },
      {
        title: <FormattedMessage id="pages.searchTable.titleDesc" defaultMessage="描述" />,
        dataIndex: 'desc',
        valueType: 'textarea',
      },
      {
        title: <FormattedMessage id="pages.searchTable.titleCallNo" defaultMessage="服务调用次数" />,
        dataIndex: 'callNo',
        sorter: true,
        hideInForm: true,
        renderText: (val: string) =>
          `${val}${intl.formatMessage({
            id: 'pages.searchTable.tenThousand',
            defaultMessage: ' 万 ',
          })}`,
      },
      {
        title: <FormattedMessage id="pages.searchTable.titleStatus" defaultMessage="状态" />,
        dataIndex: 'status',
        hideInForm: true,
        valueEnum: {
          0: {
            text: (
              <FormattedMessage id="pages.searchTable.nameStatus.default" defaultMessage="关闭" />
            ),
            status: 'Default',
          },
          1: {
            text: (
              <FormattedMessage id="pages.searchTable.nameStatus.running" defaultMessage="运行中" />
            ),
            status: 'Processing',
          },
          2: {
            text: (
              <FormattedMessage id="pages.searchTable.nameStatus.online" defaultMessage="已上线" />
            ),
            status: 'Success',
          },
          3: {
            text: (
              <FormattedMessage id="pages.searchTable.nameStatus.abnormal" defaultMessage="异常" />
            ),
            status: 'Error',
          },
        },
      },
      {
        title: (
          <FormattedMessage id="pages.searchTable.titleUpdatedAt" defaultMessage="上次调度时间" />
        ),
        sorter: true,
        dataIndex: 'updatedAt',
        valueType: 'dateTime',
        renderFormItem: (item, { defaultRender, ...rest }, form) => {
          const status = form.getFieldValue('status');
          if (`${status}` === '0') {
            return false;
          }
          if (`${status}` === '3') {
            return (
              <Input
                {...rest}
                placeholder={intl.formatMessage({
                  id: 'pages.searchTable.exception',
                  defaultMessage: '请输入异常原因！',
                })}
              />
            );
          }
          return defaultRender(item);
        },
      },
      {
        title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="操作" />,
        dataIndex: 'option',
        valueType: 'option',
      },
    ];
     return  <ProTable<TableListItem>
       headerTitle={{}}
     //   headerTitle={intl.formatMessage({
     //   id: 'pages.searchTable.title',
     //   defaultMessage: '查询表格',
     // })}
       actionRef={actionRef}
       rowKey="key"
     //   search={{
     //   labelWidth: 120,
     // }}
     //   toolBarRender={() => [
     //   <Button
     //     type="primary"
     //     key="primary"
     //     onClick={() => {
     //       handleModalVisible(true);
     //     }}
     //   >
     //     <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />
     //   </Button>,
     // ]}
       request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
       columns={columns}
       />
  }
  return (
    <PageContainer
      ghost
      header={{
        className: 'nav_back',
        title: <p><span className="title_left">现货交易-市价</span><span className="url_address">GET /query/v1.0/history_trigger_order</span>
        </p>,
        breadcrumb: {
          routes: [
            {
              path: '',
              breadcrumbName: '一级页面',
            },
            {
              path: '',
              breadcrumbName: '二级页面',
            },
            {
              path: '',
              breadcrumbName: '当前页面',
            },
          ],
        },
        extra: [
          <Button key="1">开发版</Button>,
          <Button key="2" type="primary" >体验版</Button>,
          /**<Button key="3" type="primary">
            主要按钮
          </Button>,
          <Dropdown
            key="dropdown"
            trigger={['click']}
            overlay={
              <Menu>
                <Menu.Item key="1">下拉菜单</Menu.Item>
                <Menu.Item key="2">下拉菜单2</Menu.Item>
                <Menu.Item key="3">下拉菜单3</Menu.Item>
              </Menu>
            }
          >
            <Button key="4" style={{padding: '0 8px'}}>
              <EllipsisOutlined/>
            </Button>
         * </Dropdown>,
           */
        ],
      }}
      content={content()}
        tabList={[
          {
            tab: '基本信息',
            key: 'base',
          },
          {
            tab: '详细信息',
            key: 'info',
          },
        ]}
        footer={[
          <Button key="3">重置</Button>,
          <Button key="2" type="primary">
            提交
          </Button>,
        ]}
        >

  <ProCard direction="column" ghost gutter={[0, 0]}>
    <ProCard style={{height: 200}}/>

  </ProCard>
</PageContainer>
)
};
export default OperationList;
