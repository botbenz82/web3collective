import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import AddressLink from "../component/AddressLink";
import TxLink from "../component/TxLink";
import TxStatus from "../component/TxStatus";
import CardItem from "../component/CardItem";
import TickLink from "../component/TickLink";

import { getAddress, selectAddress } from "../store/addressSlice";

function AddressPage() {

    const routeParams = useParams();
    const { addressId } = routeParams;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAddress(addressId))
    }, [routeParams, dispatch])

    const address = useSelector(selectAddress)

    console.log(address)

    return (
        <div className="w-full">
            <div className="pt-82 pb-40 max-w-[960px] mx-auto px-12">
                <Typography
                    className="font-space text-16 leading-20 mb-12 text-gray-50">
                    Tick
                </Typography>
                <Typography
                    className="font-space text-24 leading-30 mb-32 break-all">
                    {address?.id}
                </Typography>
                <Typography
                    className="font-space text-14 leading-18 mb-12">
                    Entity Reports from random peers
                </Typography>
                <div className="grid 948px:grid-cols-3 gap-16 mb-32">
                    {
                        address &&
                        Object.entries(address?.reportedValues).map(([ip, details]) => (
                            <CardItem
                                className="p-16" key={ip}>
                                <div className="flex justify-between mb-16">
                                    <div className="">
                                        <Typography
                                            className="text-14 leading-18 font-space text-gray-50">
                                            Value
                                        </Typography>
                                        <Typography
                                            className="text-16 leading-20 font-space font-500">
                                            1 QUBIC
                                        </Typography>
                                    </div>
                                    <Typography
                                        className="text-14 leading-18 font-space text-gray-50">
                                        {ip}
                                    </Typography>
                                </div>
                                <div className="flex flex-col items-center 948px:items-start gap-8">
                                    <Typography
                                        className="text-14 leading-18 font-space text-gray-50">
                                        Incoming:
                                        <span className="text-white"> {details.numberOfIncomingTransfers} </span>(Latest: <TickLink
                                            value={details.latestIncomingTransferTick}
                                            className="text-primary-40 break-all" />)
                                    </Typography>
                                    <Typography
                                        className="text-14 leading-18 font-space text-gray-50">
                                        Outgoing:
                                        <span className="text-white"> {details.numberOfOutgoingTransfers} </span>(Latest: <TickLink
                                            value={details.latestOutgoingTransferTick}
                                            className="text-primary-40 break-all" />)
                                    </Typography>
                                </div>
                            </CardItem>
                        ))
                    }
                </div>
                <Typography
                    className="text-20 leading-26 font-500 font-space mb-16">
                    Latest transfers
                </Typography>
                <div className="flex flex-col gap-12">
                    {
                        address &&
                        address?.latestTransfers?.map((item) => (
                            <div className="flex flex-col p-12 border-[1px] rounded-8 border-gray-70" key={item.id}>
                                <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16 mb-14">
                                    <div className="">
                                        <TxStatus
                                            executed={item.executed} />
                                    </div>
                                    <TxLink
                                        value={item.id} />
                                </div>
                                <div className="flex flex-col pt-14 border-t-[1px] border-gray-70">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-16">
                                        <div className="flex flex-col gap-16">
                                            <div className="flex flex-col gap-8">
                                                <Typography
                                                    className="text-14 leading-18 font-space text-gray-50">
                                                    Source
                                                </Typography>
                                                <AddressLink
                                                    value={item.sourceId}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-8">
                                                <Typography
                                                    className="text-14 leading-18 font-space text-gray-50">
                                                    Destination
                                                </Typography>
                                                <AddressLink
                                                    value={item.destId}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row md:flex-col gap-24 pr-24">
                                            <div className="flex flex-col gap-5 md:items-end">
                                                <Typography
                                                    className="text-14 leading-18 font-space text-gray-50">
                                                    Type
                                                </Typography>
                                                <Typography
                                                    className="text-14 leading-18 font-space">
                                                    {item.type} Standard
                                                </Typography>
                                            </div>
                                            <div className="flex flex-col gap-5 md:items-end">
                                                <Typography
                                                    className="text-14 leading-18 font-space text-gray-50">
                                                    Amount
                                                </Typography>
                                                <Typography
                                                    className="text-14 leading-18 font-space">
                                                    {item.amount} qus
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AddressPage;