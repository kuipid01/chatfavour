/* eslint-disable react/prop-types */
const OrderComp = ({ isUserMessage }) => {
  return (
    <div
      style={{
        alignSelf: isUserMessage ? "flex-end" : "flex-start",
      }}
      className={` bg-[#007145] h-fit py-[7px] px-[5px]  max-w-[263px] w-[263px] ${
        isUserMessage
          ? "sent rounded-t-[10px] rounded-bl-[10px] "
          : "received rounded-t-[10px] rounded-br-[10px]"
      }`}
    >
      <div className=" bg-white text-sm md:text-base text-black p-[19px] rounded-t-[10px] rounded-bl-[10px]  grid grid-cols-2">
        <div className=" grid gap-3 grid-cols-1">
          <div>
            <h1 className=" md:text-[12.5px] leading-[18.75px] md:font-[600] font-semibold text-base text-[#007145]">
              Customer Details
            </h1>
            <div>
              <span className=" text-[12.5px] leading-[18.75px] font-[600] text-black">
                Full Name:
              </span>
              <span className=" text-[12.5px] leading-[18.75px]">
                Test User
              </span>
            </div>
            <div>
              <span className=" text-[12.5px] leading-[18.75px] font-[600] text-black">
                Phone Number:
              </span>
              <span className=" text-[12.5px] leading-[18.75px]">
                09157016669
              </span>
            </div>
            <div>
              <span className=" text-[12.5px] leading-[18.75px] font-[600] text-black">
                Date:
              </span>
              <span className=" text-[12.5px] leading-[18.75px]">
                10/20/1997
              </span>
            </div>
          </div>
          <div>
            <h1 className=" md:text-[12.5px] text-[18.75px] md:font-[600] font-semibold text-base text-[#007145]">
              Delivery Details
            </h1>
            <div>
              <span className=" text-[12.5px] leading-[18.75px] font-[600]  text-black mr-3">
                Full Name:
              </span>
              <span className=" text-[12.5px] leading-[18.75px]">
                Test User
              </span>
            </div>
            <div>
              <span className=" text-[12.5px] leading-[18.75px] font-[600]  text-black mr-3">
                Email:
              </span>
              <span className=" text-[12.5px] leading-[18.75px]">
                09157016669
              </span>
            </div>
            <div>
              <span className=" text-[12.5px] leading-[18.75px] font-[600]  text-black mr-3">
                Address:
              </span>
              <span className=" text-[12.5px] leading-[18.75px]">
                10/20/1997
              </span>
            </div>
            <div>
              <span className=" text-[12.5px] leading-[18.75px] font-[600]  text-black mr-3">
                Direction:
              </span>
              <span className=" text-[12.5px] leading-[18.75px]">
                10/20/1997
              </span>
            </div>
            <div>
              <span className=" text-[12.5px] leading-[18.75px] font-[600]  text-black mr-3">
                Nearest Market:
              </span>
              <span className=" text-[12.5px] leading-[18.75px]"></span>
            </div>
            <div>
              <span className=" text-[12.5px] leading-[18.75px] font-[600]  text-black mr-3">
                Nearest Distributors:
              </span>
              <span className=" text-[12.5px] leading-[18.75px]"></span>
            </div>
          </div>
        </div>
        <div className="  hidden grid-cols-1">
          <div>
            <div>
              <span className=" font-bold text-black mr-3">Order No:</span>
              <span>Test User</span>
            </div>
            <div>
              <span className=" font-bold text-black mr-3">Email:</span>
              <span>09157016669</span>
            </div>
            <div>
              <span className=" font-bold text-black mr-3">
                Total Amount Paid:
              </span>
              <span>10/20/1997</span>
            </div>
          </div>
          <div>
            <div>
              <span className=" font-bold text-black mr-3">Phone No:</span>
              <span>Test User</span>
            </div>
            <div>
              <span className=" font-bold text-black mr-3">
                Additional Phone No:
              </span>
              <span>09157016669</span>
            </div>
            <div>
              <span className=" font-bold text-black mr-3">State/city:</span>
              <span>10/20/1997</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComp;
