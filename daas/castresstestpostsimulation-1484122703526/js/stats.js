var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1934489",
        "ok": "213459",
        "ko": "1721030"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "39",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "75089",
        "ok": "63015",
        "ko": "75089"
    },
    "meanResponseTime": {
        "total": "1317",
        "ok": "1519",
        "ko": "1292"
    },
    "standardDeviation": {
        "total": "7351",
        "ok": "5219",
        "ko": "7574"
    },
    "percentiles1": {
        "total": "87",
        "ok": "137",
        "ko": "86"
    },
    "percentiles2": {
        "total": "139",
        "ok": "358",
        "ko": "100"
    },
    "percentiles3": {
        "total": "1371",
        "ok": "7183",
        "ko": "1331"
    },
    "percentiles4": {
        "total": "59929",
        "ok": "31187",
        "ko": "59962"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 157369,
        "percentage": 8
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 14977,
        "percentage": 1
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 41113,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 1721030,
        "percentage": 89
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1579.21",
        "ok": "174.256",
        "ko": "1404.953"
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
        "total": "1934489",
        "ok": "213459",
        "ko": "1721030"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "39",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "75089",
        "ok": "63015",
        "ko": "75089"
    },
    "meanResponseTime": {
        "total": "1317",
        "ok": "1519",
        "ko": "1292"
    },
    "standardDeviation": {
        "total": "7351",
        "ok": "5219",
        "ko": "7574"
    },
    "percentiles1": {
        "total": "87",
        "ok": "137",
        "ko": "86"
    },
    "percentiles2": {
        "total": "139",
        "ok": "358",
        "ko": "100"
    },
    "percentiles3": {
        "total": "1371",
        "ok": "7183",
        "ko": "1331"
    },
    "percentiles4": {
        "total": "59929",
        "ok": "31187",
        "ko": "59961"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 157369,
        "percentage": 8
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 14977,
        "percentage": 1
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 41113,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 1721030,
        "percentage": 89
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1579.21",
        "ok": "174.256",
        "ko": "1404.953"
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
