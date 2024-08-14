import React from 'react';

const DataTable = ({ data }) => {
  if (!data || data === null || data === undefined || data.length === 0) return <div className="flex items-center justify-center h-[100%] min-w-full border-collapse border border-gray-200">
    <div className="text-center mt-4">
      No data available <br />
      Please check the availability of golf courses. e.g:<br />
      Could you please check the availability of golf courses for October 8, 2024?
    </div>
  </div>

  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-auto h-[100%]">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100 sticky top-0 z-10">
          <tr>
            {headers.map((header) => (
              <th key={header} className="border border-gray-200 p-4 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header} className="border border-gray-200 p-4">
                  {Array.isArray(row[header]) ? (
                    <div className="flex flex-wrap">
                      {row[header].map((item, idx) => (
                        <span
                          key={idx}
                          className="mr-2 mb-2 inline-block rounded bg-blue-200 px-3 py-1 text-sm text-blue-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : (
                    row[header]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;  