import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Typography } from "@mui/material";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { formatDate, formatString } from "src/app/utils/functions";
import { useNavigate, useParams } from "react-router-dom"
import { getBlock, selectBlock } from "../store/blockSlice";
import ErrorMessage from "../component/ErrorMessage";
import AddressLink from "../component/AddressLink";
import TxLink from "../component/TxLink";
import TxStatus from "../component/TxStatus";

function BlockPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const routeParams = useParams();

    const { tick } = routeParams;

    useEffect(() => {
        dispatch(getBlock(tick));
    }, [routeParams, dispatch])

    const block = useSelector(selectBlock)
    console.log(block)

    return (
        <div className='w-full '>
            <ErrorMessage />
            <div className="pt-82 pb-40 max-w-[960px] mx-auto px-8">
                <Typography
                    className="text-16 leading-20 mb-8">
                    Tick
                </Typography>
                <div className="flex justify-between items-center mb-36">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-8">
                            <IconButton
                                onClick={() => navigate(`/network/block/${Number(tick) - 1}`)}>
                                <FuseSvgIcon
                                    className=" text-gray-50"
                                    size={24}
                                    role="button"
                                >
                                    heroicons-solid:chevron-left
                                </FuseSvgIcon>
                            </IconButton>
                            <Typography
                                className="text-32 leading-40 font-500 font-space">
                                {formatString(block?.tick)}
                            </Typography>
                            <IconButton
                                onClick={() => navigate(`/network/block/${Number(tick) + 1}`)}>
                                <FuseSvgIcon
                                    className=" text-gray-50"
                                    size={24}
                                    role="button"
                                >
                                    heroicons-solid:chevron-right
                                </FuseSvgIcon>
                            </IconButton>
                        </div>
                        <Typography
                            className="text-14 leading-20 font-space text-gray-50">
                            {formatDate(block?.timestamp)}
                        </Typography>
                    </div>
                    <div className="flex justify-between gap-52  py-16 px-24 border-[1px] border-gray-70 rounded-8">
                        <div className="flex flex-col gap-8">
                            <Typography
                                className="text-14 leading-20 font-space text-gray-50"
                            >
                                Data Status
                            </Typography>
                            {
                                block?.completed ?

                                    <Typography
                                        className="text-16 leading-20 font-space text-success-40"
                                    >
                                        Complete
                                    </Typography>
                                    :
                                    <Typography
                                        className="text-16 leading-20 font-space text-error-40"
                                    >
                                        Incomplete
                                    </Typography>
                            }
                        </div>
                        <div className="flex flex-col gap-8">
                            <Typography
                                className="text-14 leading-20 font-space text-gray-50"
                            >
                                Block Status
                            </Typography>
                            <Typography
                                className="text-16 leading-20 font-space text-success-40"
                            >
                                Complete
                            </Typography>
                        </div>
                        <div className="flex flex-col gap-8">
                            <Typography
                                className="text-14 leading-20 font-space text-gray-50"
                            >
                                Number of transactions
                            </Typography>
                            <Typography
                                className="text-16 leading-20 font-space text-primary-20"
                            >
                                {formatString(block?.numberOfTx)}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="flex py-12 border-t-[1px] border-gray-70">
                    <Typography
                        className="w-120 text-14 leading-20 font-space text-gray-50">
                        Signature</Typography>
                    <Typography
                        className="text-14 leading-20 font-space text-gray-50">
                        {block?.signature}</Typography>
                </div>
                <div className="flex py-12 border-t-[1px] border-gray-70 mb-40">
                    <Typography
                        className="w-120 text-14 leading-20 font-space text-gray-50">
                        Block leader
                    </Typography>
                    <AddressLink
                        value={block?.tickLeaderId}
                    />

                </div>
                <Typography
                    className="text-20 leading-26 font-500 font-space mb-16">
                    Transactions
                </Typography>
                <div className="flex flex-col gap-12">
                    {
                        block &&
                        block?.transactions?.map((item) => (

                            <div className="flex flex-col p-12 border-[1px] rounded-8 border-gray-70" key={item.id}>
                                <div className="flex items-center gap-16 mb-14">
                                    <TxStatus
                                        executed={item.executed} />
                                    <TxLink
                                        value={item.id} />
                                </div>
                                <div className="flex flex-col pt-14 border-t-[1px] border-gray-70">
                                    <div className="flex flex-col gap-12 pr-12">
                                        <div className="flex flex-col gap-8">
                                            <div className="flex justify-between items-center">
                                                <Typography
                                                    className="text-14 leading-18 font-space text-gray-50">
                                                    Source
                                                </Typography>
                                                <Typography
                                                    className="text-14 leading-18 font-space text-gray-50">
                                                    Type
                                                </Typography>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <AddressLink
                                                    value={item.sourceId}
                                                />
                                                <Typography
                                                    className="text-14 leading-18 font-space">
                                                    {item.type} Standard
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-8">
                                            <div className="flex justify-between items-center">
                                                <Typography
                                                    className="text-14 leading-18 font-space text-gray-50">
                                                    Destination
                                                </Typography>
                                                <Typography
                                                    className="text-14 leading-18 font-space text-gray-50">
                                                    Amount
                                                </Typography>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <AddressLink
                                                    value={item.destId}
                                                />
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

export default BlockPage