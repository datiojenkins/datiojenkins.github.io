var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "187270",
        "ok": "187269",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "39",
        "ko": "60002"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "31167",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "194",
        "ok": "194",
        "ko": "60002"
    },
    "standardDeviation": {
        "total": "569",
        "ok": "552",
        "ko": "0"
    },
    "percentiles1": {
        "total": "92",
        "ok": "92",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "171",
        "ok": "171",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "549",
        "ok": "548",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "1495",
        "ok": "1495",
        "ko": "60002"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 150577,
        "percentage": 80
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 27376,
        "percentage": 15
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 9316,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1524.355",
        "ok": "1524.346",
        "ko": "0.008"
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
        "total": "187270",
        "ok": "187269",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "39",
        "ko": "60002"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "31167",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "194",
        "ok": "194",
        "ko": "60002"
    },
    "standardDeviation": {
        "total": "569",
        "ok": "552",
        "ko": "0"
    },
    "percentiles1": {
        "total": "92",
        "ok": "92",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "171",
        "ok": "171",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "549",
        "ok": "544",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "1495",
        "ok": "1495",
        "ko": "60002"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 150577,
        "percentage": 80
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 27376,
        "percentage": 15
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 9316,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1524.355",
        "ok": "1524.346",
        "ko": "0.008"
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
