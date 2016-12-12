var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "23376",
        "ok": "19236",
        "ko": "4140"
    },
    "minResponseTime": {
        "total": "36",
        "ok": "44",
        "ko": "36"
    },
    "maxResponseTime": {
        "total": "1105",
        "ok": "1105",
        "ko": "293"
    },
    "meanResponseTime": {
        "total": "76",
        "ok": "81",
        "ko": "55"
    },
    "standardDeviation": {
        "total": "31",
        "ok": "31",
        "ko": "20"
    },
    "percentiles1": {
        "total": "68",
        "ok": "73",
        "ko": "49"
    },
    "percentiles2": {
        "total": "90",
        "ok": "94",
        "ko": "58"
    },
    "percentiles3": {
        "total": "131",
        "ok": "135",
        "ko": "95"
    },
    "percentiles4": {
        "total": "182",
        "ok": "192",
        "ko": "155"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19235,
        "percentage": 82
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 4140,
        "percentage": 18
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "371.443",
        "ok": "305.658",
        "ko": "65.784"
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
        "total": "23376",
        "ok": "19236",
        "ko": "4140"
    },
    "minResponseTime": {
        "total": "36",
        "ok": "44",
        "ko": "36"
    },
    "maxResponseTime": {
        "total": "1105",
        "ok": "1105",
        "ko": "293"
    },
    "meanResponseTime": {
        "total": "76",
        "ok": "81",
        "ko": "55"
    },
    "standardDeviation": {
        "total": "31",
        "ok": "31",
        "ko": "20"
    },
    "percentiles1": {
        "total": "68",
        "ok": "73",
        "ko": "49"
    },
    "percentiles2": {
        "total": "90",
        "ok": "94",
        "ko": "58"
    },
    "percentiles3": {
        "total": "131",
        "ok": "135",
        "ko": "96"
    },
    "percentiles4": {
        "total": "181",
        "ok": "192",
        "ko": "155"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19235,
        "percentage": 82
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 4140,
        "percentage": 18
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "371.443",
        "ok": "305.658",
        "ko": "65.784"
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
