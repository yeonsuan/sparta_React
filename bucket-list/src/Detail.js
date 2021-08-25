import React from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button"; //첫번 째 방법
//import {Button} from "@material-ui/core"; // 두번 째 방법
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { useDispatch, useSelector } from "react-redux";

import { deleteBucketFB, updateBucketFB } from "./redux/modules/bucket";

const Detail = (props) => {
  const dispatch = useDispatch();



  const bucket_list = useSelector((state) => state.bucket.list);

  let bucket_index = parseInt(props.match.params.index);

  console.log(props);
  return (
    <div>
      <h1>{bucket_list[bucket_index].text}</h1>
      <ButtonGroup>
        <Button 
        color="primary"
        onClick={() => {

          dispatch(deleteBucketFB(bucket_index));
          props.history.goBack();
        }}
        >
          삭제하기</Button>
        <Button onClick={() => {
          dispatch(updateBucketFB(bucket_index));
          props.history.goBack();
        }}
        >
          완료하기</Button>
      </ButtonGroup>

    </div>
  );
};

export default Detail;