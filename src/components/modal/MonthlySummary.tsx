import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { LineCustom } from '../apex/LineCustom';
import { ModalCustom } from './styles';

const MonthlySummary = (props: any) => {

  return (
    <>
      <ModalCustom
        title="Bitcoin monthly summary" 
        visible={props.isModalVisible} 
        onCancel={props.onCancel} 
        footer={null}
        width={1300}
        >
        <p>Some contents...</p>

        <LineCustom/>
      </ModalCustom>
    </>
  );
};

export default MonthlySummary;