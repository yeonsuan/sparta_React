// Actions
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
}

// Reducer
export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD":
      return state;

    case "bucket/CREATE":
      console.log(state, action);
      const new_bucket_list = [...state.list, { text: action.bucket, completed: false }];
      return { list: new_bucket_list };

    case "bucket/DELETE":
      const bucket_list = state.list.filter((l, idx) => {
        if (idx !== action.bucket) {
          return l;
        }
      });
      return { list: bucket_list };



    case "bucket/UPDATE": {
      const bucket_list = state.list.map((l, idx) => {
        if (idx === action.bucket) {
          return { ...l, completed: true };
        } else {
          return l;
        }

      });
      return { list: bucket_list };

    }
    default:
      return state;
  }
}