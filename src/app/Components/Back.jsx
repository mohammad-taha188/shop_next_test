"use client";
export default function Back({ title }) {
  return (
    <button
      className="btn btn-red cursor-pointer "
      onClick={() => {
        history.back();
      }}
    >
      {title}
    </button>
  );
}
