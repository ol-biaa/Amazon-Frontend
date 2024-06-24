import React, { useContext, useEffect, useState } from "react";
import classes from "./orders.module.css"
import { db } from "../../utils/firebase";
import { DataContext } from "../../Components/Context/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import Layout from "../../Components/Layout/Layout";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
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
  }, [user]);
console.log(orders)
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && (
            <div style={{ padding: "20px" }}>
              You don&apos;t have orders yet.
            </div>
          )}
          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => (
                    <ProductCard flag cart product={order} key={order.id} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders