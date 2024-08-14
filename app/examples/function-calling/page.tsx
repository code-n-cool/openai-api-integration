"use client";

import React, { useState } from "react";
import styles from "../shared/page.module.css";
import Chat from "../../components/chat";
import DataTable from '../../components/datatable';
import { getAvailabilty } from "../../utils";
import { RequiredActionFunctionToolCall } from "openai/resources/beta/threads/runs/runs";

interface AvailableData {
  idType?: number,
  max?: number,
  min?: number,
  multiple?: number,
  name?: string,
  price?: number,
  start?: Date,
  idResource?: number,
  resourceName?: string,
  resourceTags?: [string],
  tags?: [string],
}

const FunctionCalling = () => {
  const [availableData, setAvailableData] = useState<AvailableData[]>();

  const functionCallHandler = async (call: RequiredActionFunctionToolCall) => {
    if (call?.function?.name !== "search_availability") return;
    const args = JSON.parse(call.function.arguments);
    const data = await getAvailabilty(args);
    setAvailableData(data);
    return JSON.stringify(data);
  };

  return (
    <main className="max-h-screen h-screen">
      <div className="h-[100%] flex flex-col items-stretch">
        <div className="max-h-[40%] flex-shrink h-fit">
          <DataTable data={availableData} />
        </div>
        <div className="flex-grow flex-shrink overflow-auto">
          <div className={styles.chatContainer}>
            <div className={styles.chat}>
              <Chat functionCallHandler={functionCallHandler} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FunctionCalling;
