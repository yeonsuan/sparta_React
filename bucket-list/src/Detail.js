import React from "react";

// redux hook을 불러옵니다.
import { useDispatch, useSelector } from "react-redux";
// 내가 만든 액션 생성 함수를 불러옵니다.
import { deleteBucketFB, updateBucketFB } from "./redux/modules/bucket";

const Detail = (props) => {
  const dispatch = useDispatch();



  const bucket_list = useSelector((state) => state.bucket.list);

  let bucket_index = parseInt(props.match.params.index);

  console.log(props);
  return (
    <div>
      <h1>{bucket_list[bucket_index].text}</h1>
      <button onClick={() => {

        dispatch(deleteBucketFB(bucket_index));
        props.history.goBack();
      }}
      >
        삭제하기
      </button>
      <button onClick={() => {
        dispatch(updateBucketFB(bucket_index));
        props.history.goBack();
      }}
      >
        완료하기
      </button>
    </div>
  );
};

export default Detail;