const OrderComp = () => {
  return (
    <div className=" bg-white text-black p-5 rounded-lg mt-5 grid grid-cols-2">
      <div className=" grid gap-3 grid-cols-1">
        <div>
          <h1 className=" text-lg font-bold text-[#007145]">
            Customer Details
          </h1>
          <div>
            <span className=" font-bold text-black">Full Name:</span>
            <span>Test User</span>
          </div>
          <div>
            <span className=" font-bold text-black">Phone Number:</span>
            <span>09157016669</span>
          </div>
          <div>
            <span className=" font-bold text-black">Date:</span>
            <span>10/20/1997</span>
          </div>
        </div>
        <div>
          <h1 className=" text-lg font-bold text-[#007145]">
            Delivery Details
          </h1>
          <div>
            <span className=" font-bold text-black mr-3">Full Name:</span>
            <span>Test User</span>
          </div>
          <div>
            <span className=" font-bold text-black mr-3">Email:</span>
            <span>09157016669</span>
          </div>
          <div>
            <span className=" font-bold text-black mr-3">Address:</span>
            <span>10/20/1997</span>
          </div>
          <div>
            <span className=" font-bold text-black mr-3">Direction:</span>
            <span>10/20/1997</span>
          </div>
          <div>
            <span className=" font-bold text-black mr-3">Nearest Market:</span>
            <span></span>
          </div>
          <div>
            <span className=" font-bold text-black mr-3">
              Nearest Distributors:
            </span>
            <span></span>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1">
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
  );
};

export default OrderComp;
