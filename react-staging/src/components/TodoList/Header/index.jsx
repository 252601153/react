import React, { Component } from "react";
import { Button } from "antd";
import { WechatOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";

export default class Header extends Component {
  onChange = (date, dateStr) => {
    console.log(date, dateStr);
  };

  render() {
    return (
      <div>
        点我
        <Button type="primary">Primary Button</Button>
        <Button type="link">链接</Button>
        <WechatOutlined />
        <DatePicker onChange={this.onChange} />
      </div>
    );
  }
}
