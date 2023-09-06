export interface Trade {
  action: "Buy" | "Sell";
  status: "On going" | "Pending" | "Lose" | "Win" | "Break even";
  instrument: string;
  openDate: string;
  entry: number;
  lot: number;
  closeDate?: string;
  closePrice?: number;
  profit?: number;
}
// <td className="py-4">Status</td>
// <td className="py-4">Instrument</td>
// <td className="py-4">Open Date</td>
// <td className="py-4">Entry Price</td>
// <td className="py-4">lot</td>
// <td className="py-4">Close Date</td>
// <td className="py-4">Close Price</td>
// <td className="py-4">Profit</td>
