var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "59564",
        "ok": "59564",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "497",
        "ok": "497",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "percentiles1": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "percentiles2": {
        "total": "65",
        "ok": "65",
        "ko": "-"
    },
    "percentiles3": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "percentiles4": {
        "total": "109",
        "ok": "109",
        "ko": "-"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 59554,
        "percentage": 100
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 10,
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
        "total": "484.453",
        "ok": "484.453",
        "ko": "-"
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
        "total": "59564",
        "ok": "59564",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "497",
        "ok": "497",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "percentiles1": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "percentiles2": {
        "total": "65",
        "ok": "65",
        "ko": "-"
    },
    "percentiles3": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "percentiles4": {
        "total": "109",
        "ok": "109",
        "ko": "-"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 59554,
        "percentage": 100
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 10,
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
        "total": "484.453",
        "ok": "484.453",
        "ko": "-"
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
