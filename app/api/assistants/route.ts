import { openai } from "@/app/openai";

export const runtime = "nodejs";

// Create a new assistant
export async function POST() {
  const assistant = await openai.beta.assistants.create({
    instructions: "An assitent for checking the availability of golf courses",
    name: "Quickstart Assistant",
    model: "gpt-4o",
    tools: [
      { type: "code_interpreter" },
      {
        type: "function",
        function: {
          "name": "search_availability",
          "description": "Search availability",
          "parameters": {
            "type": "object",
            "properties": {
              "date": {
                "type": "string",
                "description": "The date in ISO 8601 format e.g. 2024-08-12T14:43:57.634Z"
              }
            },
            "required": [
              "date"
            ],
            "additionalProperties": false
          }
        },
      },
    ],
  });
  return Response.json({ assistantId: assistant.id });
}
