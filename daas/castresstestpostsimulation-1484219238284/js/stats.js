var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "288185",
        "ok": "229857",
        "ko": "58328"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "91220",
        "ok": "85772",
        "ko": "91220"
    },
    "meanResponseTime": {
        "total": "12733",
        "ok": "1336",
        "ko": "57642"
    },
    "standardDeviation": {
        "total": "28224",
        "ok": "5643",
        "ko": "74875"
    },
    "percentiles1": {
        "total": "109",
        "ok": "102",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "1103",
        "ok": "117",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "60010",
        "ok": "7166",
        "ko": "63070"
    },
    "percentiles4": {
        "total": "63070",
        "ok": "30915",
        "ko": "91110"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 211203,
        "percentage": 73
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 1869,
        "percentage": 1
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 16785,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 58328,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "236.425",
        "ok": "188.573",
        "ko": "47.852"
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
        "total": "288185",
        "ok": "229857",
        "ko": "58328"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "91220",
        "ok": "85772",
        "ko": "91220"
    },
    "meanResponseTime": {
        "total": "12733",
        "ok": "1336",
        "ko": "57642"
    },
    "standardDeviation": {
        "total": "28224",
        "ok": "5643",
        "ko": "74875"
    },
    "percentiles1": {
        "total": "109",
        "ok": "102",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "1103",
        "ok": "117",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "60010",
        "ok": "7166",
        "ko": "63070"
    },
    "percentiles4": {
        "total": "63070",
        "ok": "30915",
        "ko": "91110"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 211203,
        "percentage": 73
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 1869,
        "percentage": 1
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 16785,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 58328,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "236.425",
        "ok": "188.573",
        "ko": "47.852"
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
