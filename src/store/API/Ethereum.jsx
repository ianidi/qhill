import { BigNumber, Contract } from "ethers";

export const createFund = async ({ ethersProvider, amount }) => {
  const abi = ["function newFund(uint, uint, uint)"];
  const tokenContract = new Contract(
    process.env.CONTRACT_ADDRESS,
    abi,
    ethersProvider.getSigner()
  );
  return tokenContract.create(amount, BigNumber.from(amount));
};

// {
//     fundId: <id>,
//     fundName:'Test Fund',
//     lockUpPeriod: 0,
//     subscriptionFee: "50000000000000000",
//     managementFeePeriod: 0,
//     managementFee: "100000000000000000",
//     performanceFeePeriod: 0,
//     performanceFee: "150000000000000000",
//     adminFee: 0,
//     minStakingAmount: 0,
//     minWithdrawAmount: 0,
//     investPeriod: 60,
// });
