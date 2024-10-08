import React from "react";
import "./HallCard.css";
import { HiMiniUserGroup } from "react-icons/hi2";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { FaCarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

export const BalloonDecoratorCard = ({ serviceProvider }) => {
    return (
        <div className="hall-card">
            <img
                className="image"
                alt="Image"
                src="https://c.animaapp.com/bhmXrgIq/img/image@2x.png"
            />
            <div className="frame">
                <div className="info">
                    <div className="location">
                    <FaRegUser size={30} />
                        <p className="element-ave">
                            {serviceProvider.serviceProvider.username}
                        </p>
                    </div>
                    {/* Additional details */}
                    <div className={"details grid-display"}>
                        <strong>
                            <FaLocationDot size={30} />{" "}
                            {serviceProvider.locations}
                        </strong>
                        <strong>
                            <HiMiniUserGroup size={30} />{" "}
                            {serviceProvider.chargesPerSquareFeet} Guests
                        </strong>
                        <strong>
                            <TbCoinRupeeFilled size={30} />
                            {serviceProvider.chargesPerSquareFeet} / sq ft.
                        </strong>
                        <strong>
                            <FaCarAlt size={30} />
                            {serviceProvider.maximumLandCoverage} parkings
                        </strong>
                    </div>
                    <div className="frame-3">
                        <div className="button-style-small">
                            <div className="text-wrapper-2">View Details</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
