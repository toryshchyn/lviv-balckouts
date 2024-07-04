import React, { useState, useEffect } from "react";
import logoImg from './logo-img.svg';

const electricityDataByDate = [
  {
    date: '2024-07-04',
    electricityData: {
      "groups": [
        {
          "id": "1.1",
          "schedule": [
            {"hour": 0, "hasElectricity": true},
            {"hour": 1, "hasElectricity": true},
            {"hour": 2, "hasElectricity": false},
            {"hour": 3, "hasElectricity": false},
            {"hour": 4, "hasElectricity": false},
            {"hour": 5, "hasElectricity": true},
            {"hour": 6, "hasElectricity": true},
            {"hour": 7, "hasElectricity": true},
            {"hour": 8, "hasElectricity": true},
            {"hour": 9, "hasElectricity": true},
            {"hour": 10, "hasElectricity": true},
            {"hour": 11, "hasElectricity": true},
            {"hour": 12, "hasElectricity": true},
            {"hour": 13, "hasElectricity": false},
            {"hour": 14, "hasElectricity": false},
            {"hour": 15, "hasElectricity": false},
            {"hour": 16, "hasElectricity": false},
            {"hour": 17, "hasElectricity": true},
            {"hour": 18, "hasElectricity": true},
            {"hour": 19, "hasElectricity": true},
            {"hour": 20, "hasElectricity": true},
            {"hour": 21, "hasElectricity": true},
            {"hour": 22, "hasElectricity": true},
            {"hour": 23, "hasElectricity": true}
          ]
        },
        {
          "id": "1.2",
          "schedule": [
            {"hour": 0, "hasElectricity": true},
            {"hour": 1, "hasElectricity": true},
            {"hour": 2, "hasElectricity": false},
            {"hour": 3, "hasElectricity": false},
            {"hour": 4, "hasElectricity": false},
            {"hour": 5, "hasElectricity": true},
            {"hour": 6, "hasElectricity": true},
            {"hour": 7, "hasElectricity": true},
            {"hour": 8, "hasElectricity": true},
            {"hour": 9, "hasElectricity": true},
            {"hour": 10, "hasElectricity": true},
            {"hour": 11, "hasElectricity": true},
            {"hour": 12, "hasElectricity": true},
            {"hour": 13, "hasElectricity": false},
            {"hour": 14, "hasElectricity": false},
            {"hour": 15, "hasElectricity": false},
            {"hour": 16, "hasElectricity": false},
            {"hour": 17, "hasElectricity": true},
            {"hour": 18, "hasElectricity": true},
            {"hour": 19, "hasElectricity": true},
            {"hour": 20, "hasElectricity": true},
            {"hour": 21, "hasElectricity": false},
            {"hour": 22, "hasElectricity": false},
            {"hour": 23, "hasElectricity": true}
          ]
        },
        {
          "id": "2.1",
          "schedule": [
            {"hour": 0, "hasElectricity": true},
            {"hour": 1, "hasElectricity": true},
            {"hour": 2, "hasElectricity": true},
            {"hour": 3, "hasElectricity": false},
            {"hour": 4, "hasElectricity": false},
            {"hour": 5, "hasElectricity": true},
            {"hour": 6, "hasElectricity": true},
            {"hour": 7, "hasElectricity": true},
            {"hour": 8, "hasElectricity": true},
            {"hour": 9, "hasElectricity": false},
            {"hour": 10, "hasElectricity": false},
            {"hour": 11, "hasElectricity": false},
            {"hour": 12, "hasElectricity": false},
            {"hour": 13, "hasElectricity": true},
            {"hour": 14, "hasElectricity": true},
            {"hour": 15, "hasElectricity": true},
            {"hour": 16, "hasElectricity": true},
            {"hour": 17, "hasElectricity": true},
            {"hour": 18, "hasElectricity": false},
            {"hour": 19, "hasElectricity": false},
            {"hour": 20, "hasElectricity": false},
            {"hour": 21, "hasElectricity": false},
            {"hour": 22, "hasElectricity": false},
            {"hour": 23, "hasElectricity": false}
          ]
        },
        {
          "id": "2.2",
          "schedule": [
            {"hour": 0, "hasElectricity": false},
            {"hour": 1, "hasElectricity": false},
            {"hour": 2, "hasElectricity": false},
            {"hour": 3, "hasElectricity": true},
            {"hour": 4, "hasElectricity": true},
            {"hour": 5, "hasElectricity": false},
            {"hour": 6, "hasElectricity": false},
            {"hour": 7, "hasElectricity": true},
            {"hour": 8, "hasElectricity": true},
            {"hour": 9, "hasElectricity": false},
            {"hour": 10, "hasElectricity": false},
            {"hour": 11, "hasElectricity": false},
            {"hour": 12, "hasElectricity": false},
            {"hour": 13, "hasElectricity": true},
            {"hour": 14, "hasElectricity": true},
            {"hour": 15, "hasElectricity": false},
            {"hour": 16, "hasElectricity": false},
            {"hour": 17, "hasElectricity": true},
            {"hour": 18, "hasElectricity": true},
            {"hour": 19, "hasElectricity": false},
            {"hour": 20, "hasElectricity": false},
            {"hour": 21, "hasElectricity": false},
            {"hour": 22, "hasElectricity": false},
            {"hour": 23, "hasElectricity": false}
          ]
        },
        {
          "id": "3.1",
          "schedule": [
            {"hour": 0, "hasElectricity": false},
            {"hour": 1, "hasElectricity": false},
            {"hour": 2, "hasElectricity": true},
            {"hour": 3, "hasElectricity": true},
            {"hour": 4, "hasElectricity": true},
            {"hour": 5, "hasElectricity": false},
            {"hour": 6, "hasElectricity": false},
            {"hour": 7, "hasElectricity": false},
            {"hour": 8, "hasElectricity": false},
            {"hour": 9, "hasElectricity": true},
            {"hour": 10, "hasElectricity": true},
            {"hour": 11, "hasElectricity": true},
            {"hour": 12, "hasElectricity": true},
            {"hour": 13, "hasElectricity": true},
            {"hour": 14, "hasElectricity": true},
            {"hour": 15, "hasElectricity": false},
            {"hour": 16, "hasElectricity": false},
            {"hour": 17, "hasElectricity": false},
            {"hour": 18, "hasElectricity": false},
            {"hour": 19, "hasElectricity": false},
            {"hour": 20, "hasElectricity": true},
            {"hour": 21, "hasElectricity": true},
            {"hour": 22, "hasElectricity": true},
            {"hour": 23, "hasElectricity": true}
          ]
        },
        {
          "id": "3.2",
          "schedule": [
            {"hour": 0, "hasElectricity": false},
            {"hour": 1, "hasElectricity": false},
            {"hour": 2, "hasElectricity": true},
            {"hour": 3, "hasElectricity": true},
            {"hour": 4, "hasElectricity": true},
            {"hour": 5, "hasElectricity": false},
            {"hour": 6, "hasElectricity": false},
            {"hour": 7, "hasElectricity": false},
            {"hour": 8, "hasElectricity": false},
            {"hour": 9, "hasElectricity": true},
            {"hour": 10, "hasElectricity": true},
            {"hour": 11, "hasElectricity": true},
            {"hour": 12, "hasElectricity": false},
            {"hour": 13, "hasElectricity": true},
            {"hour": 14, "hasElectricity": true},
            {"hour": 15, "hasElectricity": false},
            {"hour": 16, "hasElectricity": false},
            {"hour": 17, "hasElectricity": false},
            {"hour": 18, "hasElectricity": false},
            {"hour": 19, "hasElectricity": true},
            {"hour": 20, "hasElectricity": true},
            {"hour": 21, "hasElectricity": true},
            {"hour": 22, "hasElectricity": true},
            {"hour": 23, "hasElectricity": true}
          ]
        }
      ]
    }
  },
  {
    date: '2024-07-05',
    electricityData: {
      "groups": [
        {
          "id": "1.1",
          "schedule": [
            {"hour": 0, "hasElectricity": true},
            {"hour": 1, "hasElectricity": true},
            {"hour": 2, "hasElectricity": true},
            {"hour": 3, "hasElectricity": false},
            {"hour": 4, "hasElectricity": false},
            {"hour": 5, "hasElectricity": true},
            {"hour": 6, "hasElectricity": true},
            {"hour": 7, "hasElectricity": false},
            {"hour": 8, "hasElectricity": false},
            {"hour": 9, "hasElectricity": false},
            {"hour": 10, "hasElectricity": false},
            {"hour": 11, "hasElectricity": false},
            {"hour": 12, "hasElectricity": false},
            {"hour": 13, "hasElectricity": true},
            {"hour": 14, "hasElectricity": true},
            {"hour": 15, "hasElectricity": true},
            {"hour": 16, "hasElectricity": true},
            {"hour": 17, "hasElectricity": true},
            {"hour": 18, "hasElectricity": false},
            {"hour": 19, "hasElectricity": false},
            {"hour": 20, "hasElectricity": false},
            {"hour": 21, "hasElectricity": false},
            {"hour": 22, "hasElectricity": false},
            {"hour": 23, "hasElectricity": false}
          ]
        },
        {
          "id": "1.2",
          "schedule": [
            {"hour": 0, "hasElectricity": true},
            {"hour": 1, "hasElectricity": true},
            {"hour": 2, "hasElectricity": true},
            {"hour": 3, "hasElectricity": true},
            {"hour": 4, "hasElectricity": true},
            {"hour": 5, "hasElectricity": false},
            {"hour": 6, "hasElectricity": false},
            {"hour": 7, "hasElectricity": true},
            {"hour": 8, "hasElectricity": true},
            {"hour": 9, "hasElectricity": false},
            {"hour": 10, "hasElectricity": false},
            {"hour": 11, "hasElectricity": false},
            {"hour": 12, "hasElectricity": false},
            {"hour": 13, "hasElectricity": true},
            {"hour": 14, "hasElectricity": true},
            {"hour": 15, "hasElectricity": false},
            {"hour": 16, "hasElectricity": false},
            {"hour": 17, "hasElectricity": true},
            {"hour": 18, "hasElectricity": true},
            {"hour": 19, "hasElectricity": false},
            {"hour": 20, "hasElectricity": false},
            {"hour": 21, "hasElectricity": false},
            {"hour": 22, "hasElectricity": false},
            {"hour": 23, "hasElectricity": false}
          ]
        },
        {
          "id": "2.1",
          "schedule": [
            {"hour": 0, "hasElectricity": false},
            {"hour": 1, "hasElectricity": true},
            {"hour": 2, "hasElectricity": true},
            {"hour": 3, "hasElectricity": true},
            {"hour": 4, "hasElectricity": true},
            {"hour": 5, "hasElectricity": false},
            {"hour": 6, "hasElectricity": false},
            {"hour": 7, "hasElectricity": false},
            {"hour": 8, "hasElectricity": false},
            {"hour": 9, "hasElectricity": true},
            {"hour": 10, "hasElectricity": true},
            {"hour": 11, "hasElectricity": true},
            {"hour": 12, "hasElectricity": true},
            {"hour": 13, "hasElectricity": true},
            {"hour": 14, "hasElectricity": true},
            {"hour": 15, "hasElectricity": false},
            {"hour": 16, "hasElectricity": false},
            {"hour": 17, "hasElectricity": false},
            {"hour": 18, "hasElectricity": false},
            {"hour": 19, "hasElectricity": false},
            {"hour": 20, "hasElectricity": false},
            {"hour": 21, "hasElectricity": true},
            {"hour": 22, "hasElectricity": true},
            {"hour": 23, "hasElectricity": true}
          ]
        },
        {
          "id": "2.2",
          "schedule": [
            {"hour": 0, "hasElectricity": false},
            {"hour": 1, "hasElectricity": true},
            {"hour": 2, "hasElectricity": true},
            {"hour": 3, "hasElectricity": true},
            {"hour": 4, "hasElectricity": true},
            {"hour": 5, "hasElectricity": false},
            {"hour": 6, "hasElectricity": false},
            {"hour": 7, "hasElectricity": false},
            {"hour": 8, "hasElectricity": false},
            {"hour": 9, "hasElectricity": true},
            {"hour": 10, "hasElectricity": true},
            {"hour": 11, "hasElectricity": true},
            {"hour": 12, "hasElectricity": false},
            {"hour": 13, "hasElectricity": true},
            {"hour": 14, "hasElectricity": true},
            {"hour": 15, "hasElectricity": false},
            {"hour": 16, "hasElectricity": false},
            {"hour": 17, "hasElectricity": false},
            {"hour": 18, "hasElectricity": false},
            {"hour": 19, "hasElectricity": false},
            {"hour": 20, "hasElectricity": false},
            {"hour": 21, "hasElectricity": true},
            {"hour": 22, "hasElectricity": true},
            {"hour": 23, "hasElectricity": true}
          ]
        },
        {
          "id": "3.1",
          "schedule": [
            {"hour": 0, "hasElectricity": true},
            {"hour": 1, "hasElectricity": false},
            {"hour": 2, "hasElectricity": false},
            {"hour": 3, "hasElectricity": false},
            {"hour": 4, "hasElectricity": false},
            {"hour": 5, "hasElectricity": true},
            {"hour": 6, "hasElectricity": true},
            {"hour": 7, "hasElectricity": true},
            {"hour": 8, "hasElectricity": true},
            {"hour": 9, "hasElectricity": true},
            {"hour": 10, "hasElectricity": true},
            {"hour": 11, "hasElectricity": false},
            {"hour": 12, "hasElectricity": false},
            {"hour": 13, "hasElectricity": false},
            {"hour": 14, "hasElectricity": false},
            {"hour": 15, "hasElectricity": false},
            {"hour": 16, "hasElectricity": false},
            {"hour": 17, "hasElectricity": true},
            {"hour": 18, "hasElectricity": true},
            {"hour": 19, "hasElectricity": true},
            {"hour": 20, "hasElectricity": true},
            {"hour": 21, "hasElectricity": true},
            {"hour": 22, "hasElectricity": true},
            {"hour": 23, "hasElectricity": true}
          ]
        },
        {
          "id": "3.2",
          "schedule": [
            {"hour": 0, "hasElectricity": true},
            {"hour": 1, "hasElectricity": false},
            {"hour": 2, "hasElectricity": false},
            {"hour": 3, "hasElectricity": false},
            {"hour": 4, "hasElectricity": false},
            {"hour": 5, "hasElectricity": true},
            {"hour": 6, "hasElectricity": true},
            {"hour": 7, "hasElectricity": true},
            {"hour": 8, "hasElectricity": true},
            {"hour": 9, "hasElectricity": false},
            {"hour": 10, "hasElectricity": false},
            {"hour": 11, "hasElectricity": true},
            {"hour": 12, "hasElectricity": true},
            {"hour": 13, "hasElectricity": false},
            {"hour": 14, "hasElectricity": false},
            {"hour": 15, "hasElectricity": false},
            {"hour": 16, "hasElectricity": false},
            {"hour": 17, "hasElectricity": true},
            {"hour": 18, "hasElectricity": true},
            {"hour": 19, "hasElectricity": true},
            {"hour": 20, "hasElectricity": true},
            {"hour": 21, "hasElectricity": false},
            {"hour": 22, "hasElectricity": false},
            {"hour": 23, "hasElectricity": true}
          ]
        }
      ]
    }
  }
] 

const electricityData = {
  "groups": [
    {
      "id": "1.1",
      "schedule": [
        {"hour": 0, "hasElectricity": true},
        {"hour": 1, "hasElectricity": true},
        {"hour": 2, "hasElectricity": false},
        {"hour": 3, "hasElectricity": false},
        {"hour": 4, "hasElectricity": false},
        {"hour": 5, "hasElectricity": true},
        {"hour": 6, "hasElectricity": true},
        {"hour": 7, "hasElectricity": true},
        {"hour": 8, "hasElectricity": true},
        {"hour": 9, "hasElectricity": true},
        {"hour": 10, "hasElectricity": true},
        {"hour": 11, "hasElectricity": true},
        {"hour": 12, "hasElectricity": true},
        {"hour": 13, "hasElectricity": false},
        {"hour": 14, "hasElectricity": false},
        {"hour": 15, "hasElectricity": false},
        {"hour": 16, "hasElectricity": false},
        {"hour": 17, "hasElectricity": true},
        {"hour": 18, "hasElectricity": true},
        {"hour": 19, "hasElectricity": true},
        {"hour": 20, "hasElectricity": true},
        {"hour": 21, "hasElectricity": true},
        {"hour": 22, "hasElectricity": true},
        {"hour": 23, "hasElectricity": true}
      ]
    },
    {
      "id": "1.2",
      "schedule": [
        {"hour": 0, "hasElectricity": true},
        {"hour": 1, "hasElectricity": true},
        {"hour": 2, "hasElectricity": false},
        {"hour": 3, "hasElectricity": false},
        {"hour": 4, "hasElectricity": false},
        {"hour": 5, "hasElectricity": true},
        {"hour": 6, "hasElectricity": true},
        {"hour": 7, "hasElectricity": true},
        {"hour": 8, "hasElectricity": true},
        {"hour": 9, "hasElectricity": true},
        {"hour": 10, "hasElectricity": true},
        {"hour": 11, "hasElectricity": true},
        {"hour": 12, "hasElectricity": true},
        {"hour": 13, "hasElectricity": false},
        {"hour": 14, "hasElectricity": false},
        {"hour": 15, "hasElectricity": false},
        {"hour": 16, "hasElectricity": false},
        {"hour": 17, "hasElectricity": true},
        {"hour": 18, "hasElectricity": true},
        {"hour": 19, "hasElectricity": true},
        {"hour": 20, "hasElectricity": true},
        {"hour": 21, "hasElectricity": false},
        {"hour": 22, "hasElectricity": false},
        {"hour": 23, "hasElectricity": true}
      ]
    },
    {
      "id": "2.1",
      "schedule": [
        {"hour": 0, "hasElectricity": true},
        {"hour": 1, "hasElectricity": true},
        {"hour": 2, "hasElectricity": true},
        {"hour": 3, "hasElectricity": false},
        {"hour": 4, "hasElectricity": false},
        {"hour": 5, "hasElectricity": true},
        {"hour": 6, "hasElectricity": true},
        {"hour": 7, "hasElectricity": true},
        {"hour": 8, "hasElectricity": true},
        {"hour": 9, "hasElectricity": false},
        {"hour": 10, "hasElectricity": false},
        {"hour": 11, "hasElectricity": false},
        {"hour": 12, "hasElectricity": false},
        {"hour": 13, "hasElectricity": true},
        {"hour": 14, "hasElectricity": true},
        {"hour": 15, "hasElectricity": true},
        {"hour": 16, "hasElectricity": true},
        {"hour": 17, "hasElectricity": true},
        {"hour": 18, "hasElectricity": false},
        {"hour": 19, "hasElectricity": false},
        {"hour": 20, "hasElectricity": false},
        {"hour": 21, "hasElectricity": false},
        {"hour": 22, "hasElectricity": false},
        {"hour": 23, "hasElectricity": false}
      ]
    },
    {
      "id": "2.2",
      "schedule": [
        {"hour": 0, "hasElectricity": false},
        {"hour": 1, "hasElectricity": false},
        {"hour": 2, "hasElectricity": false},
        {"hour": 3, "hasElectricity": true},
        {"hour": 4, "hasElectricity": true},
        {"hour": 5, "hasElectricity": false},
        {"hour": 6, "hasElectricity": false},
        {"hour": 7, "hasElectricity": true},
        {"hour": 8, "hasElectricity": true},
        {"hour": 9, "hasElectricity": false},
        {"hour": 10, "hasElectricity": false},
        {"hour": 11, "hasElectricity": false},
        {"hour": 12, "hasElectricity": false},
        {"hour": 13, "hasElectricity": true},
        {"hour": 14, "hasElectricity": true},
        {"hour": 15, "hasElectricity": false},
        {"hour": 16, "hasElectricity": false},
        {"hour": 17, "hasElectricity": true},
        {"hour": 18, "hasElectricity": true},
        {"hour": 19, "hasElectricity": false},
        {"hour": 20, "hasElectricity": false},
        {"hour": 21, "hasElectricity": false},
        {"hour": 22, "hasElectricity": false},
        {"hour": 23, "hasElectricity": false}
      ]
    },
    {
      "id": "3.1",
      "schedule": [
        {"hour": 0, "hasElectricity": false},
        {"hour": 1, "hasElectricity": false},
        {"hour": 2, "hasElectricity": true},
        {"hour": 3, "hasElectricity": true},
        {"hour": 4, "hasElectricity": true},
        {"hour": 5, "hasElectricity": false},
        {"hour": 6, "hasElectricity": false},
        {"hour": 7, "hasElectricity": false},
        {"hour": 8, "hasElectricity": false},
        {"hour": 9, "hasElectricity": true},
        {"hour": 10, "hasElectricity": true},
        {"hour": 11, "hasElectricity": true},
        {"hour": 12, "hasElectricity": true},
        {"hour": 13, "hasElectricity": true},
        {"hour": 14, "hasElectricity": true},
        {"hour": 15, "hasElectricity": false},
        {"hour": 16, "hasElectricity": false},
        {"hour": 17, "hasElectricity": false},
        {"hour": 18, "hasElectricity": false},
        {"hour": 19, "hasElectricity": false},
        {"hour": 20, "hasElectricity": true},
        {"hour": 21, "hasElectricity": true},
        {"hour": 22, "hasElectricity": true},
        {"hour": 23, "hasElectricity": true}
      ]
    },
    {
      "id": "3.2",
      "schedule": [
        {"hour": 0, "hasElectricity": false},
        {"hour": 1, "hasElectricity": false},
        {"hour": 2, "hasElectricity": true},
        {"hour": 3, "hasElectricity": true},
        {"hour": 4, "hasElectricity": true},
        {"hour": 5, "hasElectricity": false},
        {"hour": 6, "hasElectricity": false},
        {"hour": 7, "hasElectricity": false},
        {"hour": 8, "hasElectricity": false},
        {"hour": 9, "hasElectricity": true},
        {"hour": 10, "hasElectricity": true},
        {"hour": 11, "hasElectricity": true},
        {"hour": 12, "hasElectricity": false},
        {"hour": 13, "hasElectricity": true},
        {"hour": 14, "hasElectricity": true},
        {"hour": 15, "hasElectricity": false},
        {"hour": 16, "hasElectricity": false},
        {"hour": 17, "hasElectricity": false},
        {"hour": 18, "hasElectricity": false},
        {"hour": 19, "hasElectricity": true},
        {"hour": 20, "hasElectricity": true},
        {"hour": 21, "hasElectricity": true},
        {"hour": 22, "hasElectricity": true},
        {"hour": 23, "hasElectricity": true}
      ]
    }
  ]
};

const nextDay = {
  "groups": [
    {
      "id": "1.1",
      "schedule": [
        {"hour": 0, "hasElectricity": true},
        {"hour": 1, "hasElectricity": true},
        {"hour": 2, "hasElectricity": true},
        {"hour": 3, "hasElectricity": false},
        {"hour": 4, "hasElectricity": false},
        {"hour": 5, "hasElectricity": true},
        {"hour": 6, "hasElectricity": true},
        {"hour": 7, "hasElectricity": false},
        {"hour": 8, "hasElectricity": false},
        {"hour": 9, "hasElectricity": false},
        {"hour": 10, "hasElectricity": false},
        {"hour": 11, "hasElectricity": false},
        {"hour": 12, "hasElectricity": false},
        {"hour": 13, "hasElectricity": true},
        {"hour": 14, "hasElectricity": true},
        {"hour": 15, "hasElectricity": true},
        {"hour": 16, "hasElectricity": true},
        {"hour": 17, "hasElectricity": true},
        {"hour": 18, "hasElectricity": false},
        {"hour": 19, "hasElectricity": false},
        {"hour": 20, "hasElectricity": false},
        {"hour": 21, "hasElectricity": false},
        {"hour": 22, "hasElectricity": false},
        {"hour": 23, "hasElectricity": false}
      ]
    },
    {
      "id": "1.2",
      "schedule": [
        {"hour": 0, "hasElectricity": true},
        {"hour": 1, "hasElectricity": true},
        {"hour": 2, "hasElectricity": true},
        {"hour": 3, "hasElectricity": true},
        {"hour": 4, "hasElectricity": true},
        {"hour": 5, "hasElectricity": false},
        {"hour": 6, "hasElectricity": false},
        {"hour": 7, "hasElectricity": true},
        {"hour": 8, "hasElectricity": true},
        {"hour": 9, "hasElectricity": false},
        {"hour": 10, "hasElectricity": false},
        {"hour": 11, "hasElectricity": false},
        {"hour": 12, "hasElectricity": false},
        {"hour": 13, "hasElectricity": true},
        {"hour": 14, "hasElectricity": true},
        {"hour": 15, "hasElectricity": false},
        {"hour": 16, "hasElectricity": false},
        {"hour": 17, "hasElectricity": true},
        {"hour": 18, "hasElectricity": true},
        {"hour": 19, "hasElectricity": false},
        {"hour": 20, "hasElectricity": false},
        {"hour": 21, "hasElectricity": false},
        {"hour": 22, "hasElectricity": false},
        {"hour": 23, "hasElectricity": false}
      ]
    },
    {
      "id": "2.1",
      "schedule": [
        {"hour": 0, "hasElectricity": false},
        {"hour": 1, "hasElectricity": true},
        {"hour": 2, "hasElectricity": true},
        {"hour": 3, "hasElectricity": true},
        {"hour": 4, "hasElectricity": true},
        {"hour": 5, "hasElectricity": false},
        {"hour": 6, "hasElectricity": false},
        {"hour": 7, "hasElectricity": false},
        {"hour": 8, "hasElectricity": false},
        {"hour": 9, "hasElectricity": true},
        {"hour": 10, "hasElectricity": true},
        {"hour": 11, "hasElectricity": true},
        {"hour": 12, "hasElectricity": true},
        {"hour": 13, "hasElectricity": true},
        {"hour": 14, "hasElectricity": true},
        {"hour": 15, "hasElectricity": false},
        {"hour": 16, "hasElectricity": false},
        {"hour": 17, "hasElectricity": false},
        {"hour": 18, "hasElectricity": false},
        {"hour": 19, "hasElectricity": false},
        {"hour": 20, "hasElectricity": false},
        {"hour": 21, "hasElectricity": true},
        {"hour": 22, "hasElectricity": true},
        {"hour": 23, "hasElectricity": true}
      ]
    },
    {
      "id": "2.2",
      "schedule": [
        {"hour": 0, "hasElectricity": false},
        {"hour": 1, "hasElectricity": true},
        {"hour": 2, "hasElectricity": true},
        {"hour": 3, "hasElectricity": true},
        {"hour": 4, "hasElectricity": true},
        {"hour": 5, "hasElectricity": false},
        {"hour": 6, "hasElectricity": false},
        {"hour": 7, "hasElectricity": false},
        {"hour": 8, "hasElectricity": false},
        {"hour": 9, "hasElectricity": true},
        {"hour": 10, "hasElectricity": true},
        {"hour": 11, "hasElectricity": true},
        {"hour": 12, "hasElectricity": false},
        {"hour": 13, "hasElectricity": true},
        {"hour": 14, "hasElectricity": true},
        {"hour": 15, "hasElectricity": false},
        {"hour": 16, "hasElectricity": false},
        {"hour": 17, "hasElectricity": false},
        {"hour": 18, "hasElectricity": false},
        {"hour": 19, "hasElectricity": false},
        {"hour": 20, "hasElectricity": false},
        {"hour": 21, "hasElectricity": true},
        {"hour": 22, "hasElectricity": true},
        {"hour": 23, "hasElectricity": true}
      ]
    },
    {
      "id": "3.1",
      "schedule": [
        {"hour": 0, "hasElectricity": true},
        {"hour": 1, "hasElectricity": false},
        {"hour": 2, "hasElectricity": false},
        {"hour": 3, "hasElectricity": false},
        {"hour": 4, "hasElectricity": false},
        {"hour": 5, "hasElectricity": true},
        {"hour": 6, "hasElectricity": true},
        {"hour": 7, "hasElectricity": true},
        {"hour": 8, "hasElectricity": true},
        {"hour": 9, "hasElectricity": true},
        {"hour": 10, "hasElectricity": true},
        {"hour": 11, "hasElectricity": false},
        {"hour": 12, "hasElectricity": false},
        {"hour": 13, "hasElectricity": false},
        {"hour": 14, "hasElectricity": false},
        {"hour": 15, "hasElectricity": false},
        {"hour": 16, "hasElectricity": false},
        {"hour": 17, "hasElectricity": true},
        {"hour": 18, "hasElectricity": true},
        {"hour": 19, "hasElectricity": true},
        {"hour": 20, "hasElectricity": true},
        {"hour": 21, "hasElectricity": true},
        {"hour": 22, "hasElectricity": true},
        {"hour": 23, "hasElectricity": true}
      ]
    },
    {
      "id": "3.2",
      "schedule": [
        {"hour": 0, "hasElectricity": true},
        {"hour": 1, "hasElectricity": false},
        {"hour": 2, "hasElectricity": false},
        {"hour": 3, "hasElectricity": false},
        {"hour": 4, "hasElectricity": false},
        {"hour": 5, "hasElectricity": true},
        {"hour": 6, "hasElectricity": true},
        {"hour": 7, "hasElectricity": true},
        {"hour": 8, "hasElectricity": true},
        {"hour": 9, "hasElectricity": false},
        {"hour": 10, "hasElectricity": false},
        {"hour": 11, "hasElectricity": true},
        {"hour": 12, "hasElectricity": true},
        {"hour": 13, "hasElectricity": false},
        {"hour": 14, "hasElectricity": false},
        {"hour": 15, "hasElectricity": false},
        {"hour": 16, "hasElectricity": false},
        {"hour": 17, "hasElectricity": true},
        {"hour": 18, "hasElectricity": true},
        {"hour": 19, "hasElectricity": true},
        {"hour": 20, "hasElectricity": true},
        {"hour": 21, "hasElectricity": false},
        {"hour": 22, "hasElectricity": false},
        {"hour": 23, "hasElectricity": true}
      ]
    }
  ]
}

const ElectricityStatusApp = () => {
  const [selectedGroup, setSelectedGroup] = useState(
    localStorage.getItem("selectedGroup") || "1.1"
  );

  const [currentTime, setCurrentTime] = useState(new Date());
  const [customTime, setCustomTime] = useState(new Date());
  useEffect(() => {
    localStorage.setItem("selectedGroup", selectedGroup);
  }, [selectedGroup]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getElectricityStatus = (group, time) => {
    const hour = time.getHours();
    const groupData = electricityData.groups.find((g) => g.id === group);
    return groupData.schedule[hour].hasElectricity;
  };

  const getCurrentStatus = () =>
    getElectricityStatus(selectedGroup, currentTime);

  const getFutureStatus = (minutes) => {
    const futureTime = new Date(currentTime.getTime() + minutes * 60000);
    return getElectricityStatus(selectedGroup, futureTime);
  };

  const getCustomTimeStatus = () =>
    getElectricityStatus(selectedGroup, customTime);

  const handleCustomTimeChange = (e) => {
    console.log(e.target.value);
    const [hours, minutes] = e.target.value.split(":");
    const newDate = new Date(customTime);
    newDate.setHours(parseInt(hours));
    newDate.setMinutes(parseInt(minutes));
    setCustomTime(newDate);
  };

  const formatDateTimeLocal = (date) => {
    return (
      date.getHours().toString().padStart(2, "0") +
      ":" +
      date.getMinutes().toString().padStart(2, "0")
    );
  };

  const getStatusText = (status) => (status ? "Включено" : "Відключено");
  const getStatusColor = (status) => (status ? "lightgreen" : "lightcoral");

  const StatusDisplay = ({ status }) => (
    <span
      style={{
        backgroundColor: getStatusColor(status),
        padding: "2px 5px",
        borderRadius: "3px",
      }}
    >
      {getStatusText(status) || "Невідомо"}
    </span>
  );



return (
    <div
        style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "320px",
            margin: "0 auto",
            padding: "20px",
        }}
    >
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            <div>
                <img src={logoImg} alt="Лого" style={{ width: "40px" }} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", marginLeft: '10px'}}>
                <h1 style={{ fontSize: "24px", margin: "0" }}>Блекаути у Львові</h1>
            </div>
        </div>
        <div style={{ marginBottom: "20px" }}></div>

        <div style={{ marginBottom: "20px" }}>
            <label
                htmlFor="group-select"
                style={{ display: "block", marginBottom: "5px" }}
            >
                Оберіть групу:
            </label>
            <select
                id="group-select"
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                style={{ width: "100%", padding: "5px" }}
            >
                {electricityData.groups.map((group) => (
                    <option key={group.id} value={group.id}>
                        {group.id}
                    </option>
                ))}
            </select>
        </div>

        <div style={{ marginBottom: "20px" }}>
            <div
                style={{
                    backgroundColor: getCurrentStatus() ? "lightgreen" : "lightcoral",
                    borderRadius: "4px",
                    padding: "4px",
                    paddingLeft: "10px",
                }}
            >
                <p>
                  Станом на зараз: <b>{currentTime.toLocaleTimeString()}</b> 
                  <br/>
                  { getStatusText(getCurrentStatus()) }
                </p>
            </div>

            <p>
              {
                getCurrentStatus() 
                    ? <div>
                        Найближче відключення: {findClosestPowerOffTime(electricityData.groups.find((g) => g.id === selectedGroup).schedule).toLocaleTimeString()}<br/>
                        Через: <br/>{timeSpanLabelBeforeLightOff()}
                    </div> 
                    : <div>
                        Найближче включення: {findClosestPowerOnTime(electricityData.groups.find((g) => g.id === selectedGroup).schedule).toLocaleTimeString()} <br/>
                        Через: {timeSpanLabelBeforeLightOn()}
                    </div>
              }
            </p>


            <div style={{ marginTop: "20px" }}>
              Наступні 6 годин:
            </div>
            <div style={{ display: 'flex', paddingTop: '20px'}}>
              {Array.from({ length: 6 }, (_, index) => index + 1).map((hours) => (
                <div key={hours} style={{width: 'calc(100% / 6)', backgroundColor: getStatusColor(getFutureStatus((hours-1)*60)), height: '4px', position: "relative"}}>
                  {
                  hours !== 6 &&
                  <>
                    <div style={{position: "absolute", right: 0, top: -2, width: '8px',  height: '8px', borderRadius: '4px', backgroundColor: getStatusColor(getFutureStatus(hours*60))}}></div>
                    <div style={{position: "absolute", right: -16, top: -14, padding: '2px', fontSize: '8px', borderRadius: '4px', backgroundColor: getStatusColor(getFutureStatus(hours*60))}}>
                      {getStarteOfNthHourFromNow(hours).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </div>
                  </>
                  }
                </div>
              ))}
            </div>

        </div>

        <fieldset
            style={{ borderRadius: "8px", marginBottom: "10px", marginTop: "30px" }}
        >
            <legend>Перевірити статус у певний час</legend>

            <select
                id="custom-time"
                value={formatDateTimeLocal(customTime)}
                onChange={handleCustomTimeChange}
                style={{ width: "98%", padding: "5px" }}
            >
                {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                    <option key={hour} value={hour.toString().padStart(2, "0") + ":00"}>
                        {hour.toString().padStart(2, "0")}:00
                    </option>
                ))}
            </select>
            <p style={{ marginTop: "10px" }}>
                <StatusDisplay status={getCustomTimeStatus()} />
            </p>
        </fieldset>

        <i style={{fontSize: '10px', color: `#BFBFBF`}}>
          *Дана версія працює у межах одного дня. Дані можуть бути неактуальними. Усі години можливого відключення трактуються як години з відключенням електроенергії.
        </i>
    </div>
);

function getStarteOfNthHourFromNow(n) {
    const currentTime = new Date();
    const nextHour = new Date(currentTime);
    nextHour.setHours(currentTime.getHours() + n);
    nextHour.setMinutes(0);
    nextHour.setSeconds(0);
    return nextHour;
}

function timeSpanLabelBeforeLightOff() {
    const timeBeforePowerOffMinutes = Math.abs(calculateTimeSpan(findClosestPowerOffTime(electricityData.groups.find((g) => g.id === selectedGroup).schedule), currentTime))
    const hours = Math.floor(timeBeforePowerOffMinutes / 60);
    const minutes = timeBeforePowerOffMinutes % 60;
    return `${hours} годин ${minutes} хвилин`;
}

function timeSpanLabelBeforeLightOn() {
    const timeBeforePowerOffMinutes = Math.abs(calculateTimeSpan(findClosestPowerOnTime(electricityData.groups.find((g) => g.id === selectedGroup).schedule), currentTime))
    const hours = Math.floor(timeBeforePowerOffMinutes / 60);
    const minutes = timeBeforePowerOffMinutes % 60;
    return `${hours} годин ${minutes} хвилин`;
}

function calculateTimeSpan(startTime, endTime) {
    const timeDiff = endTime.getTime() - startTime.getTime();
    const minutes = Math.floor(timeDiff / (1000 * 60));
    return minutes;
}

function findClosestPowerOnTime(schedule) {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentSchedule = schedule[currentHour];
    if (currentSchedule.hasElectricity) {
        return currentTime;
    }
    for (let i = 1; i < 24; i++) {
        const nextHour = (currentHour + i) % 24;
        if (schedule[nextHour].hasElectricity) {
            const nextTime = new Date(currentTime);
            nextTime.setHours(nextHour);
            nextTime.setMinutes(0);
            nextTime.setSeconds(0);
            return nextTime;
        }
    }
    return null;
}

function findClosestPowerOffTime(schedule) {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentSchedule = schedule[currentHour];
    if (!currentSchedule.hasElectricity) {
        return currentTime;
    }
    for (let i = 1; i < 24; i++) {
        const nextHour = (currentHour + i) % 24;
        if (!schedule[nextHour].hasElectricity) {
            const nextTime = new Date(currentTime);
            nextTime.setHours(nextHour);    
            nextTime.setMinutes(0);
            nextTime.setSeconds(0);
            return nextTime;
        }
    }
    return null;

}

};

export default ElectricityStatusApp;
