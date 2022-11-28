
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getPosts } from "../../../Redux/FetchApis/postSlice";
import { NavLink,useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import logo from "../../../assets/logo.jpg";
import "./MenuTop.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: 2px solid ${theme.palette.background.paper},
    padding: "0 4px",
  },
}));

const MenuTop = () => {
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("check", posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const { totalUniqueItems } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const handleDetail = (val) => {
    navigate(/product-detail/${val.id}, { state: { ...val } });
  };
  return (
    <div>
      <div className="navbar">
        <div className="navbar__in">
          {/* <NavLink to="/login"><Login/></NavLink> */}
          <div className="img__logo">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="input__Search">
            <input placeholder="Tìm Kiếm Sản Phẩm..." type="text" onChange={(event) => { setSearchTerm(event.target.value);}}/>
          </div>
          <div className="menu">
            <NavLink to="/arrival">Hàng Mới Về</NavLink>
            <NavLink to="/sandalnamnavbar">Sandal Nam</NavLink>
            <NavLink to="/sandalnunavbar">Sandal Nữ</NavLink>
            <NavLink to="/dep">Dép</NavLink>
            <NavLink to="/cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={totalUniqueItems} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="template_Container">
          {
            posts 
              .filter((val) => {
                if(searchTerm == ""){
                  return;
                }else if(val.depcriptions.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div onClick={() => handleDetail(val)} className="templete" key={val.id}>
                      <img src={val.img} alt="" />
                      <h3>{val.depcriptions}</h3>
                      <p className="price">${val.price}</p>
                  </div> 
                )
              })
          }
        </div>
    </div>
  );
};

export default MenuTop;