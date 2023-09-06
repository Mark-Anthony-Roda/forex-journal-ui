import { Trade } from "@/app/interfaces/Model";
import { TradeTableColumnProp } from "@/app/interfaces/Trade";

export default function Table(props: {
  columns: TradeTableColumnProp[];
  items: Trade[] | any;
}) {
  const { columns, items } = props;
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b-4 border-[#0059ff] leading-normal tracking-[0.8px] text-[#555]">
          {columns.map((item, index) => {
            const { className = "py-4", label } = item;
            return (
              <th key={index} className={className}>
                {label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {items.map((item: any, index: number) => {
          return (
            <tr
              key={index}
              className="text-center text-[#555] text-sm font-semibold leading-[22px] tracking-[0.48px]"
            >
              {columns.map((column, idx) => {
                return (
                  <td key={idx} className="py-4">
                    {column.render
                      ? column.render(item)
                      : item[column.columnName]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
