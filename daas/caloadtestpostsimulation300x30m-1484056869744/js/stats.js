var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1151827",
        "ok": "1151825",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "38",
        "ko": "25946"
    },
    "maxResponseTime": {
        "total": "25960",
        "ok": "25960",
        "ko": "25946"
    },
    "meanResponseTime": {
        "total": "46",
        "ok": "46",
        "ko": "25946"
    },
    "standardDeviation": {
        "total": "133",
        "ok": "128",
        "ko": "0"
    },
    "percentiles1": {
        "total": "44",
        "ok": "44",
        "ko": "25946"
    },
    "percentiles2": {
        "total": "46",
        "ok": "46",
        "ko": "25946"
    },
    "percentiles3": {
        "total": "49",
        "ok": "49",
        "ko": "25946"
    },
    "percentiles4": {
        "total": "86",
        "ok": "86",
        "ko": "25946"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 1146616,
        "percentage": 100
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 5181,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 28,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 2,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "638.855",
        "ok": "638.854",
        "ko": "0.001"
    }
},
contents: {
"req_caloadtestposts-ac880": {
        type: "REQUEST",
        name: "CaLoadTestPostSimulation300x30m",
path: "CaLoadTestPostSimulation300x30m",
pathFormatted: "req_caloadtestposts-ac880",
stats: {
    "name": "CaLoadTestPostSimulation300x30m",
    "numberOfRequests": {
        "total": "1151827",
        "ok": "1151825",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "38",
        "ko": "25946"
    },
    "maxResponseTime": {
        "total": "25960",
        "ok": "25960",
        "ko": "25946"
    },
    "meanResponseTime": {
        "total": "46",
        "ok": "46",
        "ko": "25946"
    },
    "standardDeviation": {
        "total": "133",
        "ok": "128",
        "ko": "0"
    },
    "percentiles1": {
        "total": "44",
        "ok": "44",
        "ko": "25946"
    },
    "percentiles2": {
        "total": "46",
        "ok": "46",
        "ko": "25946"
    },
    "percentiles3": {
        "total": "49",
        "ok": "49",
        "ko": "25946"
    },
    "percentiles4": {
        "total": "86",
        "ok": "86",
        "ko": "25946"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 1146616,
        "percentage": 100
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 5181,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 28,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 2,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "638.855",
        "ok": "638.854",
        "ko": "0.001"
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
