var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "33021",
        "ok": "7908",
        "ko": "25113"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "52",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "335",
        "ok": "335",
        "ko": "160"
    },
    "meanResponseTime": {
        "total": "54",
        "ok": "84",
        "ko": "44"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "17",
        "ko": "6"
    },
    "percentiles1": {
        "total": "45",
        "ok": "83",
        "ko": "43"
    },
    "percentiles2": {
        "total": "63",
        "ok": "87",
        "ko": "46"
    },
    "percentiles3": {
        "total": "88",
        "ok": "104",
        "ko": "49"
    },
    "percentiles4": {
        "total": "105",
        "ok": "127",
        "ko": "79"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 7878,
        "percentage": 24
    },
    "group2": {
        "name": "200 ms < t < 500 ms",
        "count": 30,
        "percentage": 0
    },
    "group3": {
        "name": "t > 500 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 25113,
        "percentage": 76
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "524.526",
        "ok": "125.616",
        "ko": "398.91"
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
        "total": "33021",
        "ok": "7908",
        "ko": "25113"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "52",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "335",
        "ok": "335",
        "ko": "160"
    },
    "meanResponseTime": {
        "total": "54",
        "ok": "84",
        "ko": "44"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "17",
        "ko": "6"
    },
    "percentiles1": {
        "total": "45",
        "ok": "83",
        "ko": "43"
    },
    "percentiles2": {
        "total": "62",
        "ok": "87",
        "ko": "45"
    },
    "percentiles3": {
        "total": "88",
        "ok": "104",
        "ko": "50"
    },
    "percentiles4": {
        "total": "105",
        "ok": "127",
        "ko": "79"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 7878,
        "percentage": 24
    },
    "group2": {
        "name": "200 ms < t < 500 ms",
        "count": 30,
        "percentage": 0
    },
    "group3": {
        "name": "t > 500 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 25113,
        "percentage": 76
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "524.526",
        "ok": "125.616",
        "ko": "398.91"
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
