import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Orders.module.css";
import { db } from "../../Utility/fireBase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import AmProductCard from "../../Components/AmProduct/AmProductCard";
import "firebase/compat/firestore";
import { collection, getDocs } from "firebase/firestore";
// import { doc, onSnapshot, collection, query, where } from "firebase/firestore";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
     if (user) {
       db.collection("users")
         .doc(user.uid)
         .collection("orders")
         .orderBy("created", "desc")
         .onSnapshot((snapshot) => {
           console.log(snapshot);
           setOrders(
             snapshot.docs.map((doc) => ({
               id: doc.id,
               data: doc.data(),
             }))
           );
         });
     } else {
       setOrders([]);
     }

    // const fetchOrders = async () => {
      // if (user) {
      //   const ordersCollection = collection(db, "users", user.uid, "orders");
      //   const ordersSnapshot = await getDocs(ordersCollection);
      //   const ordersList = ordersSnapshot.docs.map((doc) => doc.data());
      //   console.log("Fetched orders:", ordersList); // Add console log
      //   setOrders(ordersList);
      // }
    // };
    // fetchOrders();
  }, []);

  console.log(orders);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.Orders__container}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && <div style={{padding: "20px"}}>You don't have orders yet.</div>}
          {/* orderd items */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder.id}</p>
                  {eachOrder?.data?.basket?.map((order) => (
                    <AmProductCard flex={true} product={order} key={order.id} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
