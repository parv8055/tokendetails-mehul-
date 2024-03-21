import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Chip, Progress } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { FaFacebookSquare, FaInstagram, FaRegHeart } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { RiDiscordLine } from "react-icons/ri";
import { ReactNode } from "react";

function Player() {
  return (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/3bDR-G8iYlo?si=m8IkzT6Aq1M4l4Su&controls=0"
      title=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="rounded-lg aspect-video"
    ></iframe>
  );
}

function DetailsComp({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 justify-between">
      {children}
    </div>
  );
}
export default function Home() {
  const data = {
    PresaleAddress: "0x01ab470f6016632acf9b8234d8a53175a2c35329",
    TokenName: "Pyramid",
    TokenSymbol: "Pyramid",
    TokenDecimals: 9,
    TokenAddress: "0x01ab470f6016632acf9b8234d8a53175a2c35329",
    TotalSupply: 100000000000,
    TokensForPresale: 60000000000,
    TokensForLiquidity: 30000000000,
    InitialMarketCap: 258506,
    SoftCap: 50,
    PresaleStartTime: "15/01/20",
    PresaleEndTime: "15/01/20",
  };
  return (
    <main className="">
      <div className="md:flex m-4 space-y-4 md:space-y-0 md:space-x-4">
        <Card className="w-full md:w-9/12 p-4">
          <div className="flex space-x-4">
            <div className="w-2/12">
              <Image
                src="/logo.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
                className="rounded-full object-cover"
              />
            </div>
            <div className="w-10/12 space-y-4">
              <div className="flex space-x-4">
                <span>Pyramid Fair Launch</span>
                <Chip color="primary" variant="faded">
                  <FaRegHeart />
                </Chip>
                <Chip
                  color="success"
                  radius="md"
                  variant="dot"
                  className="bg-green-100"
                >
                  Success
                </Chip>
              </div>
              <div>
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <Badge
                      variant={"outline"}
                      className="bg-yellow-400 rounded"
                    >
                      #1
                    </Badge>
                    <Badge
                      variant={"outline"}
                      className="text-white bg-blue-800 rounded"
                    >
                      Heart
                    </Badge>
                    <Badge
                      variant={"outline"}
                      className="bg-green-700 text-white rounded"
                    >
                      KYC
                    </Badge>
                  </div>
                  <div className="flex space-x-4">
                    <BsGlobe className="cursor-pointer size-6 fill-blue-700" />
                    <FiTwitter className="cursor-pointer size-6 fill-blue-600" />
                    <FaFacebookSquare className="cursor-pointer size-6 fill-blue-600" />
                    <RiDiscordLine className="cursor-pointer size-6 fill-gray-700" />
                    <FaInstagram className="cursor-pointer size-6 fill-pink-700" />
                  </div>
                </div>
              </div>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                quas dignissimos voluptatum ipsa ratione! Voluptate aspernatur
                voluptas blanditiis eligendi amet corporis, vero saepe obcaecati
                voluptatum unde quidem cum exercitationem quae.
              </p>
              <div className="w-full max-w-5xl mx-auto hidden md:block">
                <Player />
              </div>
            </div>
          </div>
          <div className="w-full max-w-5xl mx-auto mt-4 block md:hidden">
            <Player />
          </div>
          <div className="mt-12">
            <DetailsComp>
              <span>Presale Address :</span>
              <h1>{data.PresaleAddress}</h1>
            </DetailsComp>
            <hr className="my-4" />
            <DetailsComp>
              <span>Token Name :</span>
              <span>{data.TokenName}</span>
            </DetailsComp>
            <hr className="my-4" />
            <div className="flex flex-col sm:flex-row justify-between">
              <span>Token Symbol :</span>
              <span>{data.TokenSymbol}</span>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col sm:flex-row justify-between">
              <span>Token Decimals :</span>
              <span>{data.TokenDecimals}</span>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col sm:flex-row justify-between">
              <span>Token Address :</span>
              <span>{data.TokenAddress}</span>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col sm:flex-row justify-between">
              <span>Total Supply :</span>
              <span>
                {data.TotalSupply} {data.TokenName}
              </span>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col sm:flex-row justify-between">
              <span>Tokens For Presale :</span>
              <span>
                {data.TokensForPresale} {data.TokenName}
              </span>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col sm:flex-row justify-between">
              <span>Tokens For Liquidity :</span>
              <span>
                {data.TokensForLiquidity} {data.TokenName}
              </span>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col sm:flex-row justify-between">
              <span>Initial Market Cap :</span>
              <span>$ {data.InitialMarketCap}</span>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col sm:flex-row justify-between">
              <span>Soft Cap :</span>
              <span>{data.SoftCap} BNB</span>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col sm:flex-row justify-between">
              <span>Presale Start Time :</span>
              <span>{data.PresaleStartTime}</span>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col sm:flex-row justify-between">
              <span>Presale End Time :</span>
              <span>{data.PresaleEndTime}</span>
            </div>
            <hr className="my-4" />
          </div>
        </Card>
        <Card className="w-full md:w-3/12 p-4 h-fit border-yellow-300 space-y-4">
          <Progress
            color="success"
            aria-label="Loading..."
            size="lg"
            value={70}
          />
          <div className="flex justify-between">
            <div className="flex flex-col text-left">
              <span>55</span>
              <span>BNB</span>
            </div>
            <div className="flex flex-col text-right">
              <span>55</span>
              <span>BNB</span>
            </div>
          </div>
          <h1 className="text-center">This pool is Closed</h1>
          <Button variant="link" className="underline block mx-auto">
            Veiw Chart
          </Button>
        </Card>
      </div>
    </main>
  );
}
