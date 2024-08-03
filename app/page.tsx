import ActivityChart from "@/components/chart"
import CircularProgress from "@/components/CircularProgressbar";
import ClientOnly from "@/components/ClientOnly"
import CustomerFeedback from "@/components/customer-feedback";
import { cn } from "@/lib/utils"
import { ChevronRight, CookingPot, Crosshair, Sandwich } from "lucide-react";
import Image from "next/image"
import 'react-circular-progressbar/dist/styles.css';

export default function Home() {
  const blueIcon = "#7294ff"
  const blueBgIcon = "#283365"
  const greenBgIcon = "##165246"
  const redBgIcon = "#5f3237"
  const pinkBgIcon = "#5b2a4a"
  const primaryBack = "#202028"

  const totalList = [
    {
      id: 1,
      bgBack: "bg-[#283365]",
      img: "/add-to-basket.png",
      title: "Total Orders",
      count: "75",
      rate: "3 %",
      rateColor: "text-[#77e2c2]",
      rateImg: "/up-arrow.png"
    },
    {
      id: 2,
      bgBack: "bg-[#165246]",
      img: "/shopping-bag.png",
      title: "Total Deleiverd",
      count: "70",
      rate: "3 %",
      rateColor: "text-[#ff8d0a]",
      rateImg: "/up-arrow2.png"
    },
    {
      id: 3,
      bgBack: "bg-[#5f3237]",
      img: "/remove.png",
      title: "Total Cancelled",
      count: "05",
      rate: "3 %",
      rateColor: "text-[#77e2c2]",
      rateImg: "/up-arrow.png"
    },
    {
      id: 4,
      bgBack: "bg-[#5b2a4a]",
      img: "/money-growth.png",
      title: "Total Revenue",
      count: "$12k",
      rate: "3 %",
      rateColor: "text-[#ff8d0a]",
      rateImg: "/up-arrow2.png"

    }
  ]

  const tableData = [
    {
      id: 1,
      img: "/olly.jpg",
      title: "olly wilson",
      order: "7654765",
      amount: "76.87",
      status: "Delieverd",
      bgBack: "bg-[#165246]"
    },
    {
      id: 2,
      img: "/deacon.jpg",
      title: "Deacon lan",
      order: "7654765",
      amount: "76.87",
      status: "Delieverd",
      bgBack: "bg-[#165246]"
    },
    {
      id: 3,
      img: "/olly.jpg",
      title: "olly wilson",
      order: "7654765",
      amount: "76.87",
      status: "Cancelled",
      bgBack: "bg-[#5f3237]"
    },
    {
      id: 4,
      img: "/deacon.jpg",
      title: "Deacon lan",
      order: "7654765",
      amount: "76.87",
      status: "Pending",
      bgBack: "bg-[#5f3237]"
    },
    {
      id: 5,
      img: "/olly.jpg",
      title: "olly wilson",
      order: "7654765",
      amount: "76.87",
      status: "Delieverd",
      bgBack: "bg-[#165246]"
    },
    {
      id: 6,
      img: "/deacon.jpg",
      title: "Deacon lan",
      order: "7654765",
      amount: "76.87",
      status: "Delieverd",
      bgBack: "bg-[#165246]"
    },
  ]

  return (
    <ClientOnly>
      <div className="p-5">
        <h2 className=" font-semibold text-xl">Dashboard</h2>
        {/* <img src="/dash.jpg" alt="" /> */}
        <div className=" grid grid-cols-12 gap-y-6 lg:gap-x-8 mt-6">
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {totalList.map((item) => (
                <div key={item.id} className="bg-[#202028] rounded-md p-4">
                  <div className={cn("w-fit rounded-xl p-2", item.bgBack)}>
                    <img src={item.img} width={30} height={30} alt="" />
                  </div>
                  <div className=" text-[12px] text-gray-300 mt-1">{item.title}</div>
                  <div className="flex justify-between items-center mt-3">
                    <span className=" text-2xl font-bold">{item.count}</span>
                    <span className={cn("flex items-center gap-2 text-[12px]", item.rateColor)}>
                      <img src={item.rateImg} width={8} height={8} alt="" />
                      {item.rate}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#202028] rounded-md p-4 mt-7">
              <h3 className=" text-lg text-white font-bold mb-4">Activity</h3>
              <ActivityChart />
            </div>

            <div className="bg-[#202028] rounded-md p-4 mt-7 overflow-auto">
              <h3 className=" text-lg text-white font-bold mb-4">Recent Orders</h3>
              <table width="100%" className=" text-left table">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Order No.</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => (
                    <tr key={item.id} className=" border-t border-t-gray-600">
                      <td className="">
                        <div className="flex items-center gap-2">
                          <Image src={item.img} alt='avatar' width={40} height={40} className='rounded-full flex-shrink-0 w-10 h-10 object-cover' />
                          {item.title}
                        </div>
                      </td>
                      <td>{item.order}</td>
                      <td>${item.amount}</td>
                      <td><span className={cn("bg-[#165246] rounded-full px-4 py-1 text-gray-300", item.bgBack)}>{item.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">

            <div className="bg-[#202028] grid grid-cols-2 rounded-md p-4">
              <div className="flex flex-col justify-between">
                <div>Net Profit</div>
                <div className=" text-3xl font-bold"> $6759.25</div>
                <div className={cn("flex items-center gap-2 text-[#77e2c2] text-[12px]")}>
                  <img src="/up-arrow.png" width={8} height={8} alt="" />
                  3 %
                </div>
              </div>
              <div className=" text-center">
                <CircularProgress value={70} />
                <div className=" text-[8px] mt-1">
                  *The values here have been rounded off.
                </div>
              </div>
            </div>

            <div className="bg-[#202028] flex flex-col gap-4 rounded-md p-4 mt-7">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-4 bg-[#5f3237] rounded-full text-[#ff8d0a]">
                    <Crosshair />
                  </div>
                  Goals
                </div>
                <div className="bg-[#44454a] rounded-full p-1">
                  <ChevronRight size={18} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-4 bg-[#283365] rounded-full text-[#254dff]">
                    <Sandwich />
                  </div>
                  Popular Dishes
                </div>
                <div className="bg-[#44454a] rounded-full p-1">
                  <ChevronRight size={18} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-4 bg-[#214a60] rounded-full text-[#00a6ff]">
                    <CookingPot />
                  </div>
                  Menus
                </div>
                <div className="bg-[#44454a] rounded-full p-1">
                  <ChevronRight size={18} />
                </div>
              </div>
            </div>

            <div className="bg-[#202028] flex flex-col gap-4 rounded-md p-4 mt-7">
              <h3 className=" text-lg text-white font-bold">Customer's Feedback</h3>
              <CustomerFeedback />
              <CustomerFeedback />
              <CustomerFeedback />
              <CustomerFeedback />
              <CustomerFeedback />
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}
