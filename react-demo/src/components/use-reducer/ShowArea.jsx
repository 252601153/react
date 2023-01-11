import React from 'react'
import { useContext } from 'react';
import { ColorContext } from './color';

const ShowArea = (props) => {
  const { color } = useContext(ColorContext);
  return <div style={{ color: color }}>字体颜色展示为{color}</div>;
}

export default ShowArea
