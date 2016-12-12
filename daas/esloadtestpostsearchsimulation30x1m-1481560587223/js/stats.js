var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "121741",
        "ok": "81854",
        "ko": "39887"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "50",
        "ko": "38"
    },
    "maxResponseTime": {
        "total": "1145",
        "ok": "1145",
        "ko": "164"
    },
    "meanResponseTime": {
        "total": "73",
        "ok": "87",
        "ko": "45"
    },
    "standardDeviation": {
        "total": "45",
        "ok": "49",
        "ko": "7"
    },
    "percentiles1": {
        "total": "79",
        "ok": "82",
        "ko": "43"
    },
    "percentiles2": {
        "total": "84",
        "ok": "86",
        "ko": "46"
    },
    "percentiles3": {
        "total": "103",
        "ok": "116",
        "ko": "59"
    },
    "percentiles4": {
        "total": "151",
        "ok": "159",
        "ko": "81"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 81455,
        "percentage": 67
    },
    "group2": {
        "name": "200 ms < t < 500 ms",
        "count": 190,
        "percentage": 0
    },
    "group3": {
        "name": "t > 500 ms",
        "count": 209,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 39887,
        "percentage": 33
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "401.823",
        "ok": "270.17",
        "ko": "131.652"
    }
},
contents: {
"req_esloadtestposts-79439": {
        type: "REQUEST",
        name: "EsLoadTestPostSearchSimulation30x1m",
path: "EsLoadTestPostSearchSimulation30x1m",
pathFormatted: "req_esloadtestposts-79439",
stats: {
    "name": "EsLoadTestPostSearchSimulation30x1m",
    "numberOfRequests": {
        "total": "121741",
        "ok": "81854",
        "ko": "39887"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "50",
        "ko": "38"
    },
    "maxResponseTime": {
        "total": "1145",
        "ok": "1145",
        "ko": "164"
    },
    "meanResponseTime": {
        "total": "73",
        "ok": "87",
        "ko": "45"
    },
    "standardDeviation": {
        "total": "45",
        "ok": "49",
        "ko": "7"
    },
    "percentiles1": {
        "total": "79",
        "ok": "82",
        "ko": "43"
    },
    "percentiles2": {
        "total": "84",
        "ok": "86",
        "ko": "46"
    },
    "percentiles3": {
        "total": "103",
        "ok": "116",
        "ko": "58"
    },
    "percentiles4": {
        "total": "151",
        "ok": "159",
        "ko": "81"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 81455,
        "percentage": 67
    },
    "group2": {
        "name": "200 ms < t < 500 ms",
        "count": 190,
        "percentage": 0
    },
    "group3": {
        "name": "t > 500 ms",
        "count": 209,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 39887,
        "percentage": 33
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "401.823",
        "ok": "270.17",
        "ko": "131.652"
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
