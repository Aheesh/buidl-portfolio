import { ConnectKitButton } from "connectkit";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { ApproveERC20 } from "@/components/approveERC20";
import { BuyPlayerBWinToken } from "@/components/buyPlayerBWinToken";

//import { getFrameMetadata } from "@coinbase/onchainkit";
//import type { Metadata } from "next";
//import PlayerBPage from "@/pages/playerB";
import { get } from "http";

// const frameMetadata = getFrameMetadata({
//   buttons: [
//     {
//       label: "We love BOAT",
//     },
//   ],
//   image: "https://build-onchain-apps.vercel.app/release/v-0-17.png",
//   postUrl: "https://build-onchain-apps.vercel.app/api/frame",
// });

// export const metadata: Metadata = {
//   manifest: "/manifest.json",
//   other: {},
// };

export default function SwapPageB() {
  return (
    <main>
      <Image
        alt="background-image"
        src="/Banner.svg"
        height="380"
        width="2000"
        className="fixed z-[-1] top-0 left-0 object-cover md:h-96 min-h-48 w-full"
      />

      <div className="fixed top-3 right-3 z-10">
        <ConnectKitButton />
      </div>
      <Wrapper>
        <h1>Player B Page</h1>
        <br />
        <h2>Bet on Player B to win the game.</h2>
        <p>Amount in Fake USDC</p>
        <ApproveERC20 />
        <BuyPlayerBWinToken />
      </Wrapper>
    </main>
  );
}
