import { DollarSign, ShoppingCart, Package, Tag, Trophy } from "lucide-react";
import MetricCard from "../components/MetricCard";
import DateRangePicker from "../components/UI/DateRangePicker";
import RevenueStats from "../components/RevenueStats";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SalesbyCategory from "../components/SalesbyCategory";
import Loading from "../components/UI/Loading";

const ATSdat = [
  {
      "id": 1,
      "period": "2024-01",
      "category": "Furniture",
      "itemName": "Football",
      "noOfItem": 160,
      "sold": 109,
      "itemPrice": 21.08,
      "revenue": 2297.72,
      "percentage": 68.12
  },
  {
      "id": 2,
      "period": "2024-01",
      "category": "Toys",
      "itemName": "Sofa",
      "noOfItem": 401,
      "sold": 142,
      "itemPrice": 379.17,
      "revenue": 53842.14,
      "percentage": 35.41
  },
  {
      "id": 3,
      "period": "2024-01",
      "category": "Sports",
      "itemName": "Football",
      "noOfItem": 387,
      "sold": 67,
      "itemPrice": 475.93,
      "revenue": 31887.31,
      "percentage": 17.31
  },
  {
      "id": 4,
      "period": "2024-01",
      "category": "Toys",
      "itemName": "Sofa",
      "noOfItem": 412,
      "sold": 350,
      "itemPrice": 352.18,
      "revenue": 123263.0,
      "percentage": 84.95
  },
  {
      "id": 5,
      "period": "2024-01",
      "category": "Clothing",
      "itemName": "Football",
      "noOfItem": 198,
      "sold": 20,
      "itemPrice": 186.58,
      "revenue": 3731.6,
      "percentage": 10.1
  },
  {
      "id": 6,
      "period": "2024-01",
      "category": "Beauty",
      "itemName": "Novel",
      "noOfItem": 374,
      "sold": 186,
      "itemPrice": 143.44,
      "revenue": 26679.84,
      "percentage": 49.73
  },
  {
      "id": 7,
      "period": "2024-01",
      "category": "Toys",
      "itemName": "Laptop",
      "noOfItem": 66,
      "sold": 46,
      "itemPrice": 404.01,
      "revenue": 18584.46,
      "percentage": 69.7
  },
  {
      "id": 8,
      "period": "2024-01",
      "category": "Electronics",
      "itemName": "T-shirt",
      "noOfItem": 344,
      "sold": 121,
      "itemPrice": 104.2,
      "revenue": 12608.2,
      "percentage": 35.17
  },
  {
      "id": 9,
      "period": "2024-01",
      "category": "Books",
      "itemName": "Rice",
      "noOfItem": 328,
      "sold": 116,
      "itemPrice": 97.26,
      "revenue": 11282.16,
      "percentage": 35.37
  },
  {
      "id": 10,
      "period": "2024-01",
      "category": "Toys",
      "itemName": "Football",
      "noOfItem": 246,
      "sold": 234,
      "itemPrice": 419.75,
      "revenue": 98221.5,
      "percentage": 95.12
  },
  {
      "id": 11,
      "period": "2024-02",
      "category": "Grocery",
      "itemName": "Laptop",
      "noOfItem": 454,
      "sold": 351,
      "itemPrice": 452.53,
      "revenue": 158838.03,
      "percentage": 77.31
  },
  {
      "id": 12,
      "period": "2024-02",
      "category": "Books",
      "itemName": "Teddy Bear",
      "noOfItem": 479,
      "sold": 149,
      "itemPrice": 254.86,
      "revenue": 37974.14,
      "percentage": 31.11
  },
  {
      "id": 13,
      "period": "2024-02",
      "category": "Clothing",
      "itemName": "Football",
      "noOfItem": 213,
      "sold": 76,
      "itemPrice": 309.62,
      "revenue": 23531.12,
      "percentage": 35.68
  },
  {
      "id": 14,
      "period": "2024-02",
      "category": "Electronics",
      "itemName": "Shampoo",
      "noOfItem": 337,
      "sold": 146,
      "itemPrice": 71.73,
      "revenue": 10472.58,
      "percentage": 43.32
  },
  {
      "id": 15,
      "period": "2024-02",
      "category": "Furniture",
      "itemName": "Novel",
      "noOfItem": 362,
      "sold": 319,
      "itemPrice": 337.1,
      "revenue": 107534.9,
      "percentage": 88.12
  },
  {
      "id": 16,
      "period": "2024-02",
      "category": "Clothing",
      "itemName": "Teddy Bear",
      "noOfItem": 197,
      "sold": 179,
      "itemPrice": 52.11,
      "revenue": 9327.69,
      "percentage": 90.86
  },
  {
      "id": 17,
      "period": "2024-02",
      "category": "Furniture",
      "itemName": "Rice",
      "noOfItem": 260,
      "sold": 33,
      "itemPrice": 130.48,
      "revenue": 4305.84,
      "percentage": 12.69
  },
  {
      "id": 18,
      "period": "2024-02",
      "category": "Beauty",
      "itemName": "Shampoo",
      "noOfItem": 372,
      "sold": 296,
      "itemPrice": 193.22,
      "revenue": 57193.12,
      "percentage": 79.57
  },
  {
      "id": 19,
      "period": "2024-02",
      "category": "Electronics",
      "itemName": "Shampoo",
      "noOfItem": 91,
      "sold": 85,
      "itemPrice": 121.08,
      "revenue": 10291.8,
      "percentage": 93.41
  },
  {
      "id": 20,
      "period": "2024-02",
      "category": "Toys",
      "itemName": "Rice",
      "noOfItem": 179,
      "sold": 113,
      "itemPrice": 376.11,
      "revenue": 42500.43,
      "percentage": 63.13
  },
  {
      "id": 21,
      "period": "2024-03",
      "category": "Electronics",
      "itemName": "Laptop",
      "noOfItem": 315,
      "sold": 82,
      "itemPrice": 477.85,
      "revenue": 39183.7,
      "percentage": 26.03
  },
  {
      "id": 22,
      "period": "2024-03",
      "category": "Toys",
      "itemName": "Sofa",
      "noOfItem": 427,
      "sold": 293,
      "itemPrice": 356.26,
      "revenue": 104384.18,
      "percentage": 68.62
  },
  {
      "id": 23,
      "period": "2024-03",
      "category": "Sports",
      "itemName": "Shampoo",
      "noOfItem": 248,
      "sold": 72,
      "itemPrice": 419.27,
      "revenue": 30187.44,
      "percentage": 29.03
  },
  {
      "id": 24,
      "period": "2024-03",
      "category": "Sports",
      "itemName": "Laptop",
      "noOfItem": 420,
      "sold": 239,
      "itemPrice": 160.7,
      "revenue": 38407.3,
      "percentage": 56.9
  },
  {
      "id": 25,
      "period": "2024-03",
      "category": "Sports",
      "itemName": "Shampoo",
      "noOfItem": 500,
      "sold": 207,
      "itemPrice": 59.21,
      "revenue": 12256.47,
      "percentage": 41.4
  },
  {
      "id": 26,
      "period": "2024-03",
      "category": "Beauty",
      "itemName": "Rice",
      "noOfItem": 217,
      "sold": 105,
      "itemPrice": 489.95,
      "revenue": 51444.75,
      "percentage": 48.39
  },
  {
      "id": 27,
      "period": "2024-03",
      "category": "Sports",
      "itemName": "Teddy Bear",
      "noOfItem": 488,
      "sold": 112,
      "itemPrice": 114.46,
      "revenue": 12819.52,
      "percentage": 22.95
  },
  {
      "id": 28,
      "period": "2024-03",
      "category": "Furniture",
      "itemName": "Sofa",
      "noOfItem": 147,
      "sold": 32,
      "itemPrice": 237.42,
      "revenue": 7597.44,
      "percentage": 21.77
  },
  {
      "id": 29,
      "period": "2024-03",
      "category": "Books",
      "itemName": "Shampoo",
      "noOfItem": 266,
      "sold": 202,
      "itemPrice": 116.08,
      "revenue": 23448.16,
      "percentage": 75.94
  },
  {
      "id": 30,
      "period": "2024-03",
      "category": "Sports",
      "itemName": "Novel",
      "noOfItem": 307,
      "sold": 84,
      "itemPrice": 309.39,
      "revenue": 25988.76,
      "percentage": 27.36
  },
  {
      "id": 31,
      "period": "2024-04",
      "category": "Books",
      "itemName": "Novel",
      "noOfItem": 254,
      "sold": 166,
      "itemPrice": 6.92,
      "revenue": 1148.72,
      "percentage": 65.35
  },
  {
      "id": 32,
      "period": "2024-04",
      "category": "Beauty",
      "itemName": "Novel",
      "noOfItem": 497,
      "sold": 308,
      "itemPrice": 110.96,
      "revenue": 34175.68,
      "percentage": 61.97
  },
  {
      "id": 33,
      "period": "2024-04",
      "category": "Books",
      "itemName": "Novel",
      "noOfItem": 414,
      "sold": 164,
      "itemPrice": 160.0,
      "revenue": 26240.0,
      "percentage": 39.61
  },
  {
      "id": 34,
      "period": "2024-04",
      "category": "Books",
      "itemName": "Novel",
      "noOfItem": 368,
      "sold": 283,
      "itemPrice": 224.41,
      "revenue": 63508.03,
      "percentage": 76.9
  },
  {
      "id": 35,
      "period": "2024-04",
      "category": "Clothing",
      "itemName": "Shampoo",
      "noOfItem": 208,
      "sold": 49,
      "itemPrice": 155.65,
      "revenue": 7626.85,
      "percentage": 23.56
  },
  {
      "id": 36,
      "period": "2024-04",
      "category": "Grocery",
      "itemName": "T-shirt",
      "noOfItem": 445,
      "sold": 307,
      "itemPrice": 238.39,
      "revenue": 73185.73,
      "percentage": 68.99
  },
  {
      "id": 37,
      "period": "2024-04",
      "category": "Furniture",
      "itemName": "Shampoo",
      "noOfItem": 383,
      "sold": 350,
      "itemPrice": 21.43,
      "revenue": 7500.5,
      "percentage": 91.38
  },
  {
      "id": 38,
      "period": "2024-04",
      "category": "Beauty",
      "itemName": "Shampoo",
      "noOfItem": 130,
      "sold": 47,
      "itemPrice": 484.63,
      "revenue": 22777.61,
      "percentage": 36.15
  },
  {
      "id": 39,
      "period": "2024-04",
      "category": "Sports",
      "itemName": "T-shirt",
      "noOfItem": 311,
      "sold": 140,
      "itemPrice": 120.75,
      "revenue": 16905.0,
      "percentage": 45.02
  },
  {
      "id": 40,
      "period": "2024-04",
      "category": "Electronics",
      "itemName": "Football",
      "noOfItem": 382,
      "sold": 342,
      "itemPrice": 72.62,
      "revenue": 24836.04,
      "percentage": 89.53
  },
  {
      "id": 41,
      "period": "2024-05",
      "category": "Beauty",
      "itemName": "Teddy Bear",
      "noOfItem": 308,
      "sold": 145,
      "itemPrice": 63.19,
      "revenue": 9162.55,
      "percentage": 47.08
  },
  {
      "id": 42,
      "period": "2024-05",
      "category": "Furniture",
      "itemName": "Football",
      "noOfItem": 62,
      "sold": 27,
      "itemPrice": 344.49,
      "revenue": 9301.23,
      "percentage": 43.55
  },
  {
      "id": 43,
      "period": "2024-05",
      "category": "Clothing",
      "itemName": "Rice",
      "noOfItem": 214,
      "sold": 210,
      "itemPrice": 457.79,
      "revenue": 96135.9,
      "percentage": 98.13
  },
  {
      "id": 44,
      "period": "2024-05",
      "category": "Beauty",
      "itemName": "Teddy Bear",
      "noOfItem": 326,
      "sold": 114,
      "itemPrice": 296.33,
      "revenue": 33781.62,
      "percentage": 34.97
  },
  {
      "id": 45,
      "period": "2024-05",
      "category": "Grocery",
      "itemName": "Sofa",
      "noOfItem": 60,
      "sold": 38,
      "itemPrice": 287.28,
      "revenue": 10916.64,
      "percentage": 63.33
  },
  {
      "id": 46,
      "period": "2024-05",
      "category": "Toys",
      "itemName": "Laptop",
      "noOfItem": 462,
      "sold": 207,
      "itemPrice": 36.92,
      "revenue": 7642.44,
      "percentage": 44.81
  },
  {
      "id": 47,
      "period": "2024-05",
      "category": "Toys",
      "itemName": "T-shirt",
      "noOfItem": 364,
      "sold": 116,
      "itemPrice": 118.9,
      "revenue": 13792.4,
      "percentage": 31.87
  },
  {
      "id": 48,
      "period": "2024-05",
      "category": "Sports",
      "itemName": "Novel",
      "noOfItem": 370,
      "sold": 302,
      "itemPrice": 145.16,
      "revenue": 43838.32,
      "percentage": 81.62
  },
  {
      "id": 49,
      "period": "2024-05",
      "category": "Beauty",
      "itemName": "T-shirt",
      "noOfItem": 318,
      "sold": 215,
      "itemPrice": 31.97,
      "revenue": 6873.55,
      "percentage": 67.61
  },
  {
      "id": 50,
      "period": "2024-05",
      "category": "Electronics",
      "itemName": "Rice",
      "noOfItem": 419,
      "sold": 80,
      "itemPrice": 396.72,
      "revenue": 31737.6,
      "percentage": 19.09
  },
  {
      "id": 51,
      "period": "2024-06",
      "category": "Grocery",
      "itemName": "Football",
      "noOfItem": 116,
      "sold": 85,
      "itemPrice": 170.51,
      "revenue": 14493.35,
      "percentage": 73.28
  },
  {
      "id": 52,
      "period": "2024-06",
      "category": "Furniture",
      "itemName": "Shampoo",
      "noOfItem": 123,
      "sold": 54,
      "itemPrice": 73.39,
      "revenue": 3963.06,
      "percentage": 43.9
  },
  {
      "id": 53,
      "period": "2024-06",
      "category": "Sports",
      "itemName": "Novel",
      "noOfItem": 312,
      "sold": 248,
      "itemPrice": 407.67,
      "revenue": 101102.16,
      "percentage": 79.49
  },
  {
      "id": 54,
      "period": "2024-06",
      "category": "Toys",
      "itemName": "Shampoo",
      "noOfItem": 483,
      "sold": 431,
      "itemPrice": 163.79,
      "revenue": 70593.49,
      "percentage": 89.23
  },
  {
      "id": 55,
      "period": "2024-06",
      "category": "Books",
      "itemName": "Football",
      "noOfItem": 225,
      "sold": 32,
      "itemPrice": 94.94,
      "revenue": 3038.08,
      "percentage": 14.22
  },
  {
      "id": 56,
      "period": "2024-06",
      "category": "Grocery",
      "itemName": "Laptop",
      "noOfItem": 339,
      "sold": 264,
      "itemPrice": 397.36,
      "revenue": 104903.04,
      "percentage": 77.88
  },
  {
      "id": 57,
      "period": "2024-06",
      "category": "Clothing",
      "itemName": "T-shirt",
      "noOfItem": 113,
      "sold": 70,
      "itemPrice": 204.89,
      "revenue": 14342.3,
      "percentage": 61.95
  },
  {
      "id": 58,
      "period": "2024-06",
      "category": "Electronics",
      "itemName": "T-shirt",
      "noOfItem": 270,
      "sold": 176,
      "itemPrice": 458.2,
      "revenue": 80643.2,
      "percentage": 65.19
  },
  {
      "id": 59,
      "period": "2024-06",
      "category": "Books",
      "itemName": "Rice",
      "noOfItem": 348,
      "sold": 163,
      "itemPrice": 335.57,
      "revenue": 54697.91,
      "percentage": 46.84
  },
  {
      "id": 60,
      "period": "2024-06",
      "category": "Clothing",
      "itemName": "T-shirt",
      "noOfItem": 63,
      "sold": 48,
      "itemPrice": 312.68,
      "revenue": 15008.64,
      "percentage": 76.19
  },
  {
      "id": 61,
      "period": "2024-07",
      "category": "Beauty",
      "itemName": "Sofa",
      "noOfItem": 364,
      "sold": 219,
      "itemPrice": 365.87,
      "revenue": 80125.53,
      "percentage": 60.16
  },
  {
      "id": 62,
      "period": "2024-07",
      "category": "Electronics",
      "itemName": "Rice",
      "noOfItem": 179,
      "sold": 127,
      "itemPrice": 462.98,
      "revenue": 58798.46,
      "percentage": 70.95
  },
  {
      "id": 63,
      "period": "2024-07",
      "category": "Clothing",
      "itemName": "Rice",
      "noOfItem": 423,
      "sold": 179,
      "itemPrice": 413.41,
      "revenue": 74000.39,
      "percentage": 42.32
  },
  {
      "id": 64,
      "period": "2024-07",
      "category": "Books",
      "itemName": "Novel",
      "noOfItem": 434,
      "sold": 253,
      "itemPrice": 180.19,
      "revenue": 45588.07,
      "percentage": 58.29
  },
  {
      "id": 65,
      "period": "2024-07",
      "category": "Books",
      "itemName": "Teddy Bear",
      "noOfItem": 208,
      "sold": 117,
      "itemPrice": 469.71,
      "revenue": 54956.07,
      "percentage": 56.25
  },
  {
      "id": 66,
      "period": "2024-07",
      "category": "Furniture",
      "itemName": "Shampoo",
      "noOfItem": 148,
      "sold": 61,
      "itemPrice": 198.62,
      "revenue": 12115.82,
      "percentage": 41.22
  },
  {
      "id": 67,
      "period": "2024-07",
      "category": "Electronics",
      "itemName": "Novel",
      "noOfItem": 213,
      "sold": 173,
      "itemPrice": 417.38,
      "revenue": 72206.74,
      "percentage": 81.22
  },
  {
      "id": 68,
      "period": "2024-07",
      "category": "Toys",
      "itemName": "Laptop",
      "noOfItem": 77,
      "sold": 74,
      "itemPrice": 23.28,
      "revenue": 1722.72,
      "percentage": 96.1
  },
  {
      "id": 69,
      "period": "2024-07",
      "category": "Books",
      "itemName": "Sofa",
      "noOfItem": 230,
      "sold": 215,
      "itemPrice": 101.5,
      "revenue": 21822.5,
      "percentage": 93.48
  },
  {
      "id": 70,
      "period": "2024-07",
      "category": "Grocery",
      "itemName": "Football",
      "noOfItem": 146,
      "sold": 47,
      "itemPrice": 204.34,
      "revenue": 9603.98,
      "percentage": 32.19
  },
  {
      "id": 71,
      "period": "2024-08",
      "category": "Toys",
      "itemName": "Novel",
      "noOfItem": 246,
      "sold": 165,
      "itemPrice": 286.76,
      "revenue": 47315.4,
      "percentage": 67.07
  },
  {
      "id": 72,
      "period": "2024-08",
      "category": "Furniture",
      "itemName": "Laptop",
      "noOfItem": 252,
      "sold": 75,
      "itemPrice": 59.32,
      "revenue": 4449.0,
      "percentage": 29.76
  },
  {
      "id": 73,
      "period": "2024-08",
      "category": "Electronics",
      "itemName": "Novel",
      "noOfItem": 321,
      "sold": 98,
      "itemPrice": 67.97,
      "revenue": 6661.06,
      "percentage": 30.53
  },
  {
      "id": 74,
      "period": "2024-08",
      "category": "Clothing",
      "itemName": "Laptop",
      "noOfItem": 161,
      "sold": 86,
      "itemPrice": 267.08,
      "revenue": 22968.88,
      "percentage": 53.42
  },
  {
      "id": 75,
      "period": "2024-08",
      "category": "Grocery",
      "itemName": "Teddy Bear",
      "noOfItem": 255,
      "sold": 106,
      "itemPrice": 445.34,
      "revenue": 47206.04,
      "percentage": 41.57
  },
  {
      "id": 76,
      "period": "2024-08",
      "category": "Toys",
      "itemName": "T-shirt",
      "noOfItem": 498,
      "sold": 141,
      "itemPrice": 30.25,
      "revenue": 4265.25,
      "percentage": 28.31
  },
  {
      "id": 77,
      "period": "2024-08",
      "category": "Beauty",
      "itemName": "Shampoo",
      "noOfItem": 81,
      "sold": 47,
      "itemPrice": 254.66,
      "revenue": 11969.02,
      "percentage": 58.02
  },
  {
      "id": 78,
      "period": "2024-08",
      "category": "Grocery",
      "itemName": "Laptop",
      "noOfItem": 157,
      "sold": 108,
      "itemPrice": 31.43,
      "revenue": 3394.44,
      "percentage": 68.79
  },
  {
      "id": 79,
      "period": "2024-08",
      "category": "Sports",
      "itemName": "Sofa",
      "noOfItem": 346,
      "sold": 167,
      "itemPrice": 337.8,
      "revenue": 56412.6,
      "percentage": 48.27
  },
  {
      "id": 80,
      "period": "2024-08",
      "category": "Books",
      "itemName": "Shampoo",
      "noOfItem": 221,
      "sold": 94,
      "itemPrice": 429.52,
      "revenue": 40374.88,
      "percentage": 42.53
  },
  {
      "id": 81,
      "period": "2024-09",
      "category": "Furniture",
      "itemName": "Teddy Bear",
      "noOfItem": 92,
      "sold": 22,
      "itemPrice": 373.22,
      "revenue": 8210.84,
      "percentage": 23.91
  },
  {
      "id": 82,
      "period": "2024-09",
      "category": "Clothing",
      "itemName": "Teddy Bear",
      "noOfItem": 178,
      "sold": 102,
      "itemPrice": 233.81,
      "revenue": 23848.62,
      "percentage": 57.3
  },
  {
      "id": 83,
      "period": "2024-09",
      "category": "Toys",
      "itemName": "Football",
      "noOfItem": 250,
      "sold": 82,
      "itemPrice": 366.28,
      "revenue": 30034.96,
      "percentage": 32.8
  },
  {
      "id": 84,
      "period": "2024-09",
      "category": "Sports",
      "itemName": "Football",
      "noOfItem": 424,
      "sold": 379,
      "itemPrice": 49.84,
      "revenue": 18889.36,
      "percentage": 89.39
  },
  {
      "id": 85,
      "period": "2024-09",
      "category": "Toys",
      "itemName": "Sofa",
      "noOfItem": 266,
      "sold": 154,
      "itemPrice": 404.92,
      "revenue": 62357.68,
      "percentage": 57.89
  },
  {
      "id": 86,
      "period": "2024-09",
      "category": "Beauty",
      "itemName": "Novel",
      "noOfItem": 180,
      "sold": 52,
      "itemPrice": 497.81,
      "revenue": 25886.12,
      "percentage": 28.89
  },
  {
      "id": 87,
      "period": "2024-09",
      "category": "Toys",
      "itemName": "Teddy Bear",
      "noOfItem": 327,
      "sold": 211,
      "itemPrice": 124.39,
      "revenue": 26246.29,
      "percentage": 64.53
  },
  {
      "id": 88,
      "period": "2024-09",
      "category": "Books",
      "itemName": "Shampoo",
      "noOfItem": 132,
      "sold": 45,
      "itemPrice": 68.96,
      "revenue": 3103.2,
      "percentage": 34.09
  },
  {
      "id": 89,
      "period": "2024-09",
      "category": "Beauty",
      "itemName": "T-shirt",
      "noOfItem": 75,
      "sold": 25,
      "itemPrice": 478.89,
      "revenue": 11972.25,
      "percentage": 33.33
  },
  {
      "id": 90,
      "period": "2024-09",
      "category": "Sports",
      "itemName": "Rice",
      "noOfItem": 92,
      "sold": 30,
      "itemPrice": 319.6,
      "revenue": 9588.0,
      "percentage": 32.61
  },
  {
      "id": 91,
      "period": "2024-10",
      "category": "Furniture",
      "itemName": "T-shirt",
      "noOfItem": 160,
      "sold": 121,
      "itemPrice": 362.23,
      "revenue": 43829.83,
      "percentage": 75.62
  },
  {
      "id": 92,
      "period": "2024-10",
      "category": "Books",
      "itemName": "Teddy Bear",
      "noOfItem": 184,
      "sold": 180,
      "itemPrice": 422.33,
      "revenue": 76019.4,
      "percentage": 97.83
  },
  {
      "id": 93,
      "period": "2024-10",
      "category": "Beauty",
      "itemName": "Sofa",
      "noOfItem": 394,
      "sold": 97,
      "itemPrice": 170.24,
      "revenue": 16513.28,
      "percentage": 24.62
  },
  {
      "id": 94,
      "period": "2024-10",
      "category": "Toys",
      "itemName": "Rice",
      "noOfItem": 350,
      "sold": 50,
      "itemPrice": 76.1,
      "revenue": 3805.0,
      "percentage": 14.29
  },
  {
      "id": 95,
      "period": "2024-10",
      "category": "Furniture",
      "itemName": "T-shirt",
      "noOfItem": 150,
      "sold": 43,
      "itemPrice": 231.29,
      "revenue": 9945.47,
      "percentage": 28.67
  },
  {
      "id": 96,
      "period": "2024-10",
      "category": "Furniture",
      "itemName": "Laptop",
      "noOfItem": 452,
      "sold": 235,
      "itemPrice": 431.23,
      "revenue": 101339.05,
      "percentage": 51.99
  },
  {
      "id": 97,
      "period": "2024-10",
      "category": "Sports",
      "itemName": "T-shirt",
      "noOfItem": 250,
      "sold": 213,
      "itemPrice": 215.01,
      "revenue": 45797.13,
      "percentage": 85.2
  },
  {
      "id": 98,
      "period": "2024-10",
      "category": "Beauty",
      "itemName": "Football",
      "noOfItem": 451,
      "sold": 97,
      "itemPrice": 275.49,
      "revenue": 26722.53,
      "percentage": 21.51
  },
  {
      "id": 99,
      "period": "2024-10",
      "category": "Sports",
      "itemName": "Teddy Bear",
      "noOfItem": 487,
      "sold": 285,
      "itemPrice": 407.98,
      "revenue": 116274.3,
      "percentage": 58.52
  },
  {
      "id": 100,
      "period": "2024-10",
      "category": "Clothing",
      "itemName": "Laptop",
      "noOfItem": 388,
      "sold": 98,
      "itemPrice": 49.08,
      "revenue": 4809.84,
      "percentage": 25.26
  },
  {
      "id": 101,
      "period": "2024-11",
      "category": "Toys",
      "itemName": "T-shirt",
      "noOfItem": 458,
      "sold": 266,
      "itemPrice": 45.1,
      "revenue": 11996.6,
      "percentage": 58.08
  },
  {
      "id": 102,
      "period": "2024-11",
      "category": "Clothing",
      "itemName": "Shampoo",
      "noOfItem": 393,
      "sold": 212,
      "itemPrice": 177.72,
      "revenue": 37676.64,
      "percentage": 53.94
  },
  {
      "id": 103,
      "period": "2024-11",
      "category": "Grocery",
      "itemName": "Football",
      "noOfItem": 419,
      "sold": 31,
      "itemPrice": 321.11,
      "revenue": 9954.41,
      "percentage": 7.4
  },
  {
      "id": 104,
      "period": "2024-11",
      "category": "Beauty",
      "itemName": "Teddy Bear",
      "noOfItem": 345,
      "sold": 79,
      "itemPrice": 55.04,
      "revenue": 4348.16,
      "percentage": 22.9
  },
  {
      "id": 105,
      "period": "2024-11",
      "category": "Grocery",
      "itemName": "Football",
      "noOfItem": 380,
      "sold": 232,
      "itemPrice": 25.02,
      "revenue": 5804.64,
      "percentage": 61.05
  },
  {
      "id": 106,
      "period": "2024-11",
      "category": "Toys",
      "itemName": "Rice",
      "noOfItem": 344,
      "sold": 316,
      "itemPrice": 480.92,
      "revenue": 151970.72,
      "percentage": 91.86
  },
  {
      "id": 107,
      "period": "2024-11",
      "category": "Books",
      "itemName": "T-shirt",
      "noOfItem": 308,
      "sold": 65,
      "itemPrice": 300.93,
      "revenue": 19560.45,
      "percentage": 21.1
  },
  {
      "id": 108,
      "period": "2024-11",
      "category": "Furniture",
      "itemName": "Sofa",
      "noOfItem": 226,
      "sold": 85,
      "itemPrice": 234.07,
      "revenue": 19895.95,
      "percentage": 37.61
  },
  {
      "id": 109,
      "period": "2024-11",
      "category": "Clothing",
      "itemName": "T-shirt",
      "noOfItem": 407,
      "sold": 336,
      "itemPrice": 348.31,
      "revenue": 117032.16,
      "percentage": 82.56
  },
  {
      "id": 110,
      "period": "2024-11",
      "category": "Sports",
      "itemName": "Football",
      "noOfItem": 337,
      "sold": 283,
      "itemPrice": 150.27,
      "revenue": 42526.41,
      "percentage": 83.98
  },
  {
      "id": 111,
      "period": "2024-12",
      "category": "Beauty",
      "itemName": "Shampoo",
      "noOfItem": 90,
      "sold": 72,
      "itemPrice": 108.46,
      "revenue": 7809.12,
      "percentage": 80.0
  },
  {
      "id": 112,
      "period": "2024-12",
      "category": "Beauty",
      "itemName": "Sofa",
      "noOfItem": 388,
      "sold": 111,
      "itemPrice": 497.66,
      "revenue": 55240.26,
      "percentage": 28.61
  },
  {
      "id": 113,
      "period": "2024-12",
      "category": "Electronics",
      "itemName": "Novel",
      "noOfItem": 287,
      "sold": 125,
      "itemPrice": 397.47,
      "revenue": 49683.75,
      "percentage": 43.55
  },
  {
      "id": 114,
      "period": "2024-12",
      "category": "Clothing",
      "itemName": "Football",
      "noOfItem": 274,
      "sold": 235,
      "itemPrice": 13.34,
      "revenue": 3134.9,
      "percentage": 85.77
  },
  {
      "id": 115,
      "period": "2024-12",
      "category": "Toys",
      "itemName": "Rice",
      "noOfItem": 126,
      "sold": 25,
      "itemPrice": 161.77,
      "revenue": 4044.25,
      "percentage": 19.84
  },
  {
      "id": 116,
      "period": "2024-12",
      "category": "Beauty",
      "itemName": "Football",
      "noOfItem": 158,
      "sold": 28,
      "itemPrice": 130.57,
      "revenue": 3655.96,
      "percentage": 17.72
  },
  {
      "id": 117,
      "period": "2024-12",
      "category": "Electronics",
      "itemName": "Football",
      "noOfItem": 135,
      "sold": 120,
      "itemPrice": 432.75,
      "revenue": 51930.0,
      "percentage": 88.89
  },
  {
      "id": 118,
      "period": "2024-12",
      "category": "Electronics",
      "itemName": "Shampoo",
      "noOfItem": 108,
      "sold": 59,
      "itemPrice": 192.91,
      "revenue": 11381.69,
      "percentage": 54.63
  },
  {
      "id": 119,
      "period": "2024-12",
      "category": "Clothing",
      "itemName": "Teddy Bear",
      "noOfItem": 475,
      "sold": 78,
      "itemPrice": 206.29,
      "revenue": 16090.62,
      "percentage": 16.42
  },
  {
      "id": 120,
      "period": "2024-12",
      "category": "Grocery",
      "itemName": "Football",
      "noOfItem": 468,
      "sold": 26,
      "itemPrice": 26.05,
      "revenue": 677.3,
      "percentage": 5.56
  },
  {
      "id": 121,
      "period": "2025-01",
      "category": "Furniture",
      "itemName": "Shampoo",
      "noOfItem": 89,
      "sold": 34,
      "itemPrice": 285.49,
      "revenue": 9706.66,
      "percentage": 38.2
  },
  {
      "id": 122,
      "period": "2025-01",
      "category": "Clothing",
      "itemName": "Teddy Bear",
      "noOfItem": 142,
      "sold": 44,
      "itemPrice": 295.89,
      "revenue": 13019.16,
      "percentage": 30.99
  },
  {
      "id": 123,
      "period": "2025-01",
      "category": "Beauty",
      "itemName": "Rice",
      "noOfItem": 485,
      "sold": 481,
      "itemPrice": 44.97,
      "revenue": 21630.57,
      "percentage": 99.18
  },
  {
      "id": 124,
      "period": "2025-01",
      "category": "Books",
      "itemName": "Laptop",
      "noOfItem": 269,
      "sold": 170,
      "itemPrice": 435.36,
      "revenue": 74011.2,
      "percentage": 63.2
  },
  {
      "id": 125,
      "period": "2025-01",
      "category": "Books",
      "itemName": "Rice",
      "noOfItem": 208,
      "sold": 177,
      "itemPrice": 376.49,
      "revenue": 66638.73,
      "percentage": 85.1
  },
  {
      "id": 126,
      "period": "2025-01",
      "category": "Grocery",
      "itemName": "Rice",
      "noOfItem": 224,
      "sold": 50,
      "itemPrice": 204.89,
      "revenue": 10244.5,
      "percentage": 22.32
  },
  {
      "id": 127,
      "period": "2025-01",
      "category": "Electronics",
      "itemName": "Sofa",
      "noOfItem": 284,
      "sold": 183,
      "itemPrice": 109.32,
      "revenue": 20005.56,
      "percentage": 64.44
  },
  {
      "id": 128,
      "period": "2025-01",
      "category": "Furniture",
      "itemName": "Rice",
      "noOfItem": 191,
      "sold": 111,
      "itemPrice": 325.12,
      "revenue": 36088.32,
      "percentage": 58.12
  },
  {
      "id": 129,
      "period": "2025-01",
      "category": "Grocery",
      "itemName": "Shampoo",
      "noOfItem": 372,
      "sold": 59,
      "itemPrice": 399.89,
      "revenue": 23593.51,
      "percentage": 15.86
  },
  {
      "id": 130,
      "period": "2025-01",
      "category": "Books",
      "itemName": "Sofa",
      "noOfItem": 399,
      "sold": 105,
      "itemPrice": 427.47,
      "revenue": 44884.35,
      "percentage": 26.32
  },
  {
      "id": 131,
      "period": "2025-02",
      "category": "Grocery",
      "itemName": "T-shirt",
      "noOfItem": 199,
      "sold": 123,
      "itemPrice": 393.88,
      "revenue": 48447.24,
      "percentage": 61.81
  },
  {
      "id": 132,
      "period": "2025-02",
      "category": "Electronics",
      "itemName": "Teddy Bear",
      "noOfItem": 392,
      "sold": 290,
      "itemPrice": 218.5,
      "revenue": 63365.0,
      "percentage": 73.98
  },
  {
      "id": 133,
      "period": "2025-02",
      "category": "Toys",
      "itemName": "Teddy Bear",
      "noOfItem": 258,
      "sold": 218,
      "itemPrice": 428.95,
      "revenue": 93511.1,
      "percentage": 84.5
  },
  {
      "id": 134,
      "period": "2025-02",
      "category": "Toys",
      "itemName": "Teddy Bear",
      "noOfItem": 210,
      "sold": 160,
      "itemPrice": 26.05,
      "revenue": 4168.0,
      "percentage": 76.19
  },
  {
      "id": 135,
      "period": "2025-02",
      "category": "Furniture",
      "itemName": "Laptop",
      "noOfItem": 449,
      "sold": 175,
      "itemPrice": 214.87,
      "revenue": 37602.25,
      "percentage": 38.98
  },
  {
      "id": 136,
      "period": "2025-02",
      "category": "Furniture",
      "itemName": "Shampoo",
      "noOfItem": 309,
      "sold": 146,
      "itemPrice": 420.09,
      "revenue": 61333.14,
      "percentage": 47.25
  },
  {
      "id": 137,
      "period": "2025-02",
      "category": "Clothing",
      "itemName": "Sofa",
      "noOfItem": 179,
      "sold": 24,
      "itemPrice": 394.71,
      "revenue": 9473.04,
      "percentage": 13.41
  },
  {
      "id": 138,
      "period": "2025-02",
      "category": "Beauty",
      "itemName": "Shampoo",
      "noOfItem": 417,
      "sold": 314,
      "itemPrice": 171.45,
      "revenue": 53835.3,
      "percentage": 75.3
  },
  {
      "id": 139,
      "period": "2025-02",
      "category": "Grocery",
      "itemName": "Rice",
      "noOfItem": 450,
      "sold": 142,
      "itemPrice": 192.9,
      "revenue": 27391.8,
      "percentage": 31.56
  },
  {
      "id": 140,
      "period": "2025-02",
      "category": "Electronics",
      "itemName": "Teddy Bear",
      "noOfItem": 125,
      "sold": 64,
      "itemPrice": 131.98,
      "revenue": 8446.72,
      "percentage": 51.2
  }
];



const Dashboard = () => {
  const [filterData, setFilterData] = useState([]);
  
  const { startDate, endDate } = useSelector((state) => state.dateRange);
  
  const processData = (ATSdat) => {
    const categoryRevenue = {};
  
    ATSdat.forEach(({ category, revenue }) => {
      if (categoryRevenue[category]) {
        categoryRevenue[category] += (Math.round(revenue * 100)/100); // Add revenue if category exists
      } else {
        categoryRevenue[category] = (Math.round(revenue * 100)/100); // Initialize revenue if new category
      }
    });
  
    // Convert object to array format [{ name: "Category1", value: 100 }, ...]
    return Object.entries(categoryRevenue).map(([name, value]) => ({
      name,
      value,
    }));
  };
  const temp = processData(ATSdat);
  const[pieData, setPieData] = useState(temp);
  

  function getMax(arr, prop) {
      var maxCate,maxvalue = 0,sumt=0,revenueD =0,checkdata = 0, totalOrder = 0;
      for (var i=0 ; i < arr.length; i++) {
        checkdata += (arr[i][prop] * arr[i].itemPrice);
        sumt += arr[i][prop];
        revenueD += arr[i]["revenue"]
        totalOrder += arr[i]["noOfItem"]
        if(arr[i][prop] > maxvalue){
          maxvalue = arr[i][prop];
          maxCate = i;
        }
      }
      
      return [arr[maxCate],sumt,revenueD,checkdata,totalOrder];
  }
  const AllTimeSoldCategory = getMax(ATSdat,"sold");
  const [topsale, setTopsale] = useState(AllTimeSoldCategory[0])
  const [getSum ,setGetSum] = useState(AllTimeSoldCategory[1]);
  const [revenueD, setRevenueD] = useState(AllTimeSoldCategory[2]);
  const[checkdata,setCheckdata] = useState(AllTimeSoldCategory[3])
  const[haveOrder, setHaveOrder] = useState(AllTimeSoldCategory[4])
  

  
  useEffect(() => {
    if (startDate != null && endDate != null) {
      const filteredData = ATSdat.filter((item) => {
        const itemDate = new Date(item.period);
        return itemDate >= startDate && itemDate <= endDate;
      });
      setFilterData(filteredData);
      const filterNewSoldCategory = getMax(filteredData,"sold");
      const filterPiedata = processData(filteredData);
      console.log(filterNewSoldCategory)
      setTopsale(filterNewSoldCategory[0]);
      setGetSum(filterNewSoldCategory[1]);
      setRevenueD(filterNewSoldCategory[2]);
      setCheckdata(filterNewSoldCategory[3]);
      setHaveOrder(filterNewSoldCategory[4]);
      setPieData(filterPiedata);

    } else {
      setFilterData(ATSdat);
      setTopsale(AllTimeSoldCategory[0]);
      setGetSum(AllTimeSoldCategory[1]);
      setRevenueD(AllTimeSoldCategory[2]);
      setCheckdata(AllTimeSoldCategory[3]);
      setHaveOrder(AllTimeSoldCategory[4]);
      setPieData(temp);
    }
  }, [startDate, endDate, ATSdat]);


  if (!filterData) return <Loading/>;
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Metric Cards Below Header */}
      <main className="p-6 pt-24">
        <DateRangePicker />
        {/* Grid for Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <MetricCard
            title="Total Sales"
            value={"₹" + Math.round(checkdata * 100) / 100}
            icon={<ShoppingCart />}
            subtext="This month"
          />
          <MetricCard
            title="Total Revenue"
            value={"₹" +Math.round(revenueD * 100) / 100}
            icon={<DollarSign />}
            subtext="This month"
          />
          <MetricCard
            title="Total Orders"
            value={haveOrder}
            icon={<Package />}
            subtext="Completed"
          />
          <MetricCard
            title="Items Sold"
            value={getSum}
            icon={<Tag />}
            subtext="Across all categories"
          />
          <MetricCard
            title="Top-selling Category and Product"
            value={topsale?.category + " & " + topsale?.itemName }
            icon={<Trophy />}
            subtext="Category: Electronics"
          />
        </div>
      </main>

      {/* Revenue Stats and Sales by Category */}
      <div className="p-6">
        <div className="lg:grid lg:grid-cols-2 gap-6">
          <div className="col-span-1">
            <RevenueStats ATSdata={filterData} />
          </div>
          <div className="col-span-1">
            <SalesbyCategory ATSdata={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
