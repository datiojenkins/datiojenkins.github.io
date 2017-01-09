var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "38638",
        "ok": "30",
        "ko": "38608"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "77",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "173",
        "ok": "94",
        "ko": "173"
    },
    "meanResponseTime": {
        "total": "46",
        "ok": "84",
        "ko": "46"
    },
    "standardDeviation": {
        "total": "7",
        "ok": "4",
        "ko": "7"
    },
    "percentiles1": {
        "total": "45",
        "ok": "84",
        "ko": "45"
    },
    "percentiles2": {
        "total": "47",
        "ok": "86",
        "ko": "47"
    },
    "percentiles3": {
        "total": "54",
        "ok": "90",
        "ko": "53"
    },
    "percentiles4": {
        "total": "85",
        "ok": "93",
        "ko": "85"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 30,
        "percentage": 0
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 38608,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "614.033",
        "ok": "0.477",
        "ko": "613.556"
    }
},
contents: {
"req_caloadtestposts-4ee46": {
        type: "REQUEST",
        name: "CaLoadTestPostSimulation30x1m",
path: "CaLoadTestPostSimulation30x1m",
pathFormatted: "req_caloadtestposts-4ee46",
stats: {
    "name": "CaLoadTestPostSimulation30x1m",
    "numberOfRequests": {
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "percentiles2": {
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "percentiles3": {
        "total": "90",
        "ok": "90",
        "ko": "-"
    },
    "percentiles4": {
        "total": "93",
        "ok": "93",
        "ko": "-"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 30,
        "percentage": 100
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.477",
        "ok": "0.477",
        "ko": "-"
    }
}
    },"req_caloadtestposts-5527a": {
        type: "REQUEST",
        name: "CaLoadTestPostSimulation30x1m Redirect 1",
path: "CaLoadTestPostSimulation30x1m Redirect 1",
pathFormatted: "req_caloadtestposts-5527a",
stats: {
    "name": "CaLoadTestPostSimulation30x1m Redirect 1",
    "numberOfRequests": {
        "total": "38608",
        "ok": "0",
        "ko": "38608"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "-",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "173",
        "ok": "-",
        "ko": "173"
    },
    "meanResponseTime": {
        "total": "46",
        "ok": "-",
        "ko": "46"
    },
    "standardDeviation": {
        "total": "7",
        "ok": "-",
        "ko": "7"
    },
    "percentiles1": {
        "total": "45",
        "ok": "-",
        "ko": "45"
    },
    "percentiles2": {
        "total": "46",
        "ok": "-",
        "ko": "47"
    },
    "percentiles3": {
        "total": "53",
        "ok": "-",
        "ko": "53"
    },
    "percentiles4": {
        "total": "85",
        "ok": "-",
        "ko": "85"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 38608,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "613.556",
        "ok": "-",
        "ko": "613.556"
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
