//bucket.js
import { firestore } from "../../firebase";

const bucket_db = firestore.collection("bucket")

//Actions

const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const UPDATE = "bucket/UPDATE";

const initialState = {
  //   list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
  list: [
    { text: "영화관 가기", completed: false },
    { text: "매일 책읽기", completed: false },
    { text: "수영 배우기", completed: false },
  ],
};

// Action Creators
export const loadBucket = (bucket) => {
  return { type: LOAD, bucket };
};

export const createBucket = (bucket) => {
  return { type: CREATE, bucket };
};

export const deleteBucket = (bucket) => {
  return { type: DELETE, bucket };
};

export const updateBucket = (bucket) => {
  return { type: UPDATE, bucket };
};


export const loadBucketFB = () => {
  return function (dispatch) {

    bucket_db.get().then((docs) => {
      let bucket_data = [];

      docs.forEach((doc) => {
        if (doc.exists) {
          bucket_data = [...bucket_data, { id: doc.id, ...doc.data() }]
        }
      })

      console.log(bucket_data);
      dispatch(loadBucket(bucket_data));
    });
  }
}


export const addBucketFB = (bucket) => {
  return function (dispatch) {
    let bucket_data = { text: bucket, completed: false };

    bucket_db.add(bucket_data).then(docRef => {
      bucket_data = { ...bucket_data, id: docRef.id };
      dispatch(createBucket(bucket_data));
    })
  }
}

export const updatteBucketFB = (bucket) => {
  return function (dispatch, getState) {
    const _bucket_data = getState().bucket.list[bucket];

    

    let bucket_data = { ..._bucket_data, completed: true };

    if(!bucket_data.id){
      return;
    }

    bucket_db.doc(bucket_data.id).update(bucket_data).then(docRef => {
      dispatch(updateBucket(bucket));
    }).catch(error => {
      console.log(error)
    });
  }
}

export const deleteBucketFB = (bucket) => {
  return function (dispatch, getState) {
    const _bucket_data = getState().bucket.list[bucket];

    if(_bucket_data.id){
      return;
    }

    bucket_db.doc(_bucket_data.id).delete().then(docRef => {
      dispatch(deleteBucket(bucket));
    }).catch(error => {
      console.log(error);
    });
  }
}

// Reducer
export default function reducer(state = initialState, action) {

  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD": {
      if (action.bucket.length > 0) {
        return { list: action.bucket };
      }
      return state;
    }

    case "bucket/CREATE": {

      const new_bucket_list = [
        ...state.list,
        action.bucket,
      ];
      return { list: new_bucket_list };
    }

    case "bucket/DELETE": {
      const bucket_list = state.list.filter((l, idx) => {
        if (idx !== action.bucket) {
          return l;
        }
      });
      return { list: bucket_list };
    }

    case "bucket/UPDATE": {
      const bucket_list = state.list.map((l, idx) => {
        if (idx === action.bucket) {

          return { ...l, completed: true };
        }

        return l;
      });

      return { list: bucket_list };
    }

    default:
      return state;
  }
}