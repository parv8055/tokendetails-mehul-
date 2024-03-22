import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Chip, Progress, Snippet } from "@nextui-org/react";
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
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:justify-between">
      {children}
    </div>
  );
}

function formatDate(date: Date): string {
  return `${date.getFullYear()}.${
    date.getMonth() + 1
  }.${date.getDate()} ${date.getHours()}:${date.getMinutes()} (UTC)`;
}

const dateStart = new Date();
const dateEnd = new Date();
dateEnd.setTime(dateEnd.getTime() + 10 * 24 * 60 * 60 * 1000);

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
                className="rounded-full object-cover mx-auto"
              />
            </div>
            <div className="w-10/12 space-y-4">
              <div className="flex space-x-2 md:space-x-4">
                <span className="text-xl md:text-3xl font-extrabold">
                  Pyramid Fair Launch
                </span>
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
              <div className="w-full max-w-2xl mx-auto hidden md:block">
                <Player />
              </div>
            </div>
          </div>
          <div className="w-full mx-auto mt-4 block md:hidden">
            <Player />
          </div>
          <div className="mt-12">
            <DetailsComp>
              <span className="text-lg font-bold">Presale Address :</span>
              <Snippet hideSymbol={true} variant="shadow" color="secondary">
                {data.PresaleAddress}
              </Snippet>
            </DetailsComp>
            <hr className="my-4" />
            <DetailsComp>
              <span className="text-lg font-bold">Token Name :</span>
              <span>{data.TokenName}</span>
            </DetailsComp>
            <hr className="my-4" />
            <DetailsComp>
              <span className="text-lg font-bold">Token Symbol :</span>
              <span>{data.TokenSymbol}</span>
            </DetailsComp>
            <hr className="my-4" />
            <DetailsComp>
              <span className="text-lg font-bold">Token Decimals :</span>
              <span>{data.TokenDecimals}</span>
            </DetailsComp>
            <hr className="my-4" />
            <DetailsComp>
              <span className="text-lg font-bold">Token Address :</span>
              <Snippet hideSymbol={true} variant="shadow" color="secondary">
                {data.TokenAddress}
              </Snippet>
            </DetailsComp>
            <hr className="my-4" />
            <DetailsComp>
              <span className="text-lg font-bold">Total Supply :</span>
              <span>
                {data.TotalSupply.toLocaleString("en-US")} {data.TokenName}
              </span>
            </DetailsComp>
            <hr className="my-4" />
            <DetailsComp>
              <span className="text-lg font-bold">Tokens For Presale :</span>
              <span>
                {data.TokensForPresale.toLocaleString("en-US")} {data.TokenName}
              </span>
            </DetailsComp>
            <hr className="my-4" />
            <DetailsComp>
              <span className="text-lg font-bold">Tokens For Liquidity :</span>
              <span>
                {data.TokensForLiquidity.toLocaleString("en-US")}{" "}
                {data.TokenName}
              </span>
            </DetailsComp>
            <hr className="my-4" />
            <DetailsComp>
              <span className="text-lg font-bold">Initial Market Cap :</span>
              <span>$ {data.InitialMarketCap.toLocaleString("en-US")}</span>
            </DetailsComp>
            <hr className="my-4" />
            <DetailsComp>
              <span className="text-lg font-bold">Soft Cap :</span>
              <span>{data.SoftCap} BNB</span>
            </DetailsComp>
            <hr className="my-4" />
            <DetailsComp>
              <span className="text-lg font-bold">Presale Start Time :</span>
              <span>{formatDate(dateStart)}</span>
            </DetailsComp>
            <hr className="my-4" />
            <DetailsComp>
              <span className="text-lg font-bold">Presale End Time :</span>
              <span>{formatDate(dateEnd)}</span>
            </DetailsComp>
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
          <div className="flex justify-between font-bold">
            <div className="flex flex-col text-left">
              <span>55</span>
              <span>BNB</span>
            </div>
            <div className="flex flex-col text-right">
              <span>55</span>
              <span>BNB</span>
            </div>
          </div>
          <h1 className="text-center font-bold">This pool is Closed</h1>
          <Button variant="link" className="underline block mx-auto">
            Veiw Chart
          </Button>
        </Card>
      </div>
    </main>
  );
}
