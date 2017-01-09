var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "39895",
        "ok": "39865",
        "ko": "30"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "39",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "154",
        "ok": "154",
        "ko": "48"
    },
    "meanResponseTime": {
        "total": "44",
        "ok": "44",
        "ko": "43"
    },
    "standardDeviation": {
        "total": "5",
        "ok": "5",
        "ko": "2"
    },
    "percentiles1": {
        "total": "44",
        "ok": "44",
        "ko": "43"
    },
    "percentiles2": {
        "total": "46",
        "ok": "46",
        "ko": "45"
    },
    "percentiles3": {
        "total": "49",
        "ok": "49",
        "ko": "46"
    },
    "percentiles4": {
        "total": "83",
        "ok": "83",
        "ko": "47"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 39865,
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
        "count": 30,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "633.968",
        "ok": "633.492",
        "ko": "0.477"
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
        "total": "83",
        "ok": "83",
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
        "total": "87",
        "ok": "87",
        "ko": "-"
    },
    "percentiles3": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "percentiles4": {
        "total": "92",
        "ok": "92",
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
        "total": "39865",
        "ok": "39835",
        "ko": "30"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "39",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "154",
        "ok": "154",
        "ko": "48"
    },
    "meanResponseTime": {
        "total": "44",
        "ok": "44",
        "ko": "43"
    },
    "standardDeviation": {
        "total": "5",
        "ok": "5",
        "ko": "2"
    },
    "percentiles1": {
        "total": "44",
        "ok": "44",
        "ko": "43"
    },
    "percentiles2": {
        "total": "46",
        "ok": "46",
        "ko": "45"
    },
    "percentiles3": {
        "total": "49",
        "ok": "49",
        "ko": "46"
    },
    "percentiles4": {
        "total": "83",
        "ok": "83",
        "ko": "47"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 39835,
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
        "count": 30,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "633.492",
        "ok": "633.015",
        "ko": "0.477"
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
