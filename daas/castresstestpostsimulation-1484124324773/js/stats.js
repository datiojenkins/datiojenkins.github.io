var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "21321",
        "ok": "20873",
        "ko": "448"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "40",
        "ko": "20364"
    },
    "maxResponseTime": {
        "total": "60057",
        "ok": "58456",
        "ko": "60057"
    },
    "meanResponseTime": {
        "total": "1974",
        "ok": "765",
        "ko": "58333"
    },
    "standardDeviation": {
        "total": "9200",
        "ok": "3946",
        "ko": "7658"
    },
    "percentiles1": {
        "total": "61",
        "ok": "60",
        "ko": "60010"
    },
    "percentiles2": {
        "total": "86",
        "ok": "85",
        "ko": "60046"
    },
    "percentiles3": {
        "total": "15138",
        "ok": "127",
        "ko": "60047"
    },
    "percentiles4": {
        "total": "60010",
        "ok": "20489",
        "ko": "60056"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 20043,
        "percentage": 94
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 27,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 803,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 448,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "158.04",
        "ok": "154.719",
        "ko": "3.321"
    }
},
contents: {
"req_castresstestpos-57704": {
        type: "REQUEST",
        name: "CaStressTestPostSimulation",
path: "CaStressTestPostSimulation",
pathFormatted: "req_castresstestpos-57704",
stats: {
    "name": "CaStressTestPostSimulation",
    "numberOfRequests": {
        "total": "21321",
        "ok": "20873",
        "ko": "448"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "40",
        "ko": "20364"
    },
    "maxResponseTime": {
        "total": "60057",
        "ok": "58456",
        "ko": "60057"
    },
    "meanResponseTime": {
        "total": "1974",
        "ok": "765",
        "ko": "58333"
    },
    "standardDeviation": {
        "total": "9200",
        "ok": "3946",
        "ko": "7658"
    },
    "percentiles1": {
        "total": "61",
        "ok": "60",
        "ko": "60010"
    },
    "percentiles2": {
        "total": "86",
        "ok": "85",
        "ko": "60046"
    },
    "percentiles3": {
        "total": "15138",
        "ok": "128",
        "ko": "60047"
    },
    "percentiles4": {
        "total": "60010",
        "ok": "20490",
        "ko": "60056"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 20043,
        "percentage": 94
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 27,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 803,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 448,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "158.04",
        "ok": "154.719",
        "ko": "3.321"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
