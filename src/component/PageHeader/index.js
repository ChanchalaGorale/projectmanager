import { Avatar, Button } from "@mui/material";
import React from "react";

function PageHeader() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "grey 1px solid",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "0.5rem",
          fontWeight: "600",
        }}
      >
        Project manager
      </div>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "flex-end",
          padding: "0.5rem",
        }}
      >
        <Button
          style={{
            marginRight: "1rem",
          }}
          size="small"
        >
          New task
        </Button>
        <Avatar>C</Avatar>
      </div>
    </div>
  );
}

export default PageHeader;
