var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "54426",
        "ok": "54426",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1108",
        "ok": "1108",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "65",
        "ok": "65",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "percentiles1": {
        "total": "62",
        "ok": "62",
        "ko": "-"
    },
    "percentiles2": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "percentiles3": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "percentiles4": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 54350,
        "percentage": 100
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 75,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "442.52",
        "ok": "442.52",
        "ko": "-"
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
        "total": "54426",
        "ok": "54426",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1108",
        "ok": "1108",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "65",
        "ok": "65",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "percentiles1": {
        "total": "62",
        "ok": "62",
        "ko": "-"
    },
    "percentiles2": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "percentiles3": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "percentiles4": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 54350,
        "percentage": 100
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 75,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "442.52",
        "ok": "442.52",
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
