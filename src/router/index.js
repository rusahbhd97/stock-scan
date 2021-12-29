import { createWebHistory, createRouter } from "vue-router";
import Stocks from "../components/Stocks.vue";
import Details from "../components/Details.vue";
import Values from "../components/Values.vue";
import Indicator from "../components/Indicator.vue";



const routes = [
  {
    path: "/",
    redirect: "/page"
  },
  {
    path: "/page",
    name: "Page",
    component: Stocks,
  },
  {
    path: "/page/top_gainers",
    name: "Top gainers",
    component: Details,
  },
  {
    path: "/page/intraday_buying",
    name: "Intraday buying seen in last 15 minutes",
    component: Details,
  },
  {
    path: "/page/open_high",
    name: "Open = High",
    component: Details,
  },
  {
    path: "/page/open_high_$1",
    name: "Open = High $1",
    component: Values,
  },
  {
    path: "/page/cci_reversal",
    name: "CCI Reversal",
    component: Details,
  },
  {
    path: "/page/cci_reversal_$1",
    name: "CCI Reversal $1",
    component: Indicator,
  },
  {
    path: "/page/cci_reversal_$2",
    name: "CCI Reversal $2",
    component: Values,
  },
  {
    path: "/page/rsi_overbought",
    name: "RSI Overbought",
    component: Details,
  },
  {
    path: "/page/rsi_overbought_$1",
    name: "RSI Overbought $1",
    component: Values,
  },
  {
    path: "/page/rsi_overbought_$2",
    name: "RSI Overbought $2",
    component: Values,
  },
  {
    path: "/page/rsi_overbought_$3",
    name: "RSI Overbought $3",
    component: Values,
  },
  {
    path: "/page/rsi_overbought_$4",
    name: "RSI Overbought $4",
    component: Indicator,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;