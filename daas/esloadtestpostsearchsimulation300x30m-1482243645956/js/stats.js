var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1043583",
        "ok": "856541",
        "ko": "187042"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "47",
        "ko": "43"
    },
    "maxResponseTime": {
        "total": "60103",
        "ok": "39005",
        "ko": "60103"
    },
    "meanResponseTime": {
        "total": "517",
        "ok": "491",
        "ko": "637"
    },
    "standardDeviation": {
        "total": "990",
        "ok": "817",
        "ko": "1546"
    },
    "percentiles1": {
        "total": "309",
        "ok": "300",
        "ko": "358"
    },
    "percentiles2": {
        "total": "377",
        "ok": "360",
        "ko": "426"
    },
    "percentiles3": {
        "total": "1383",
        "ok": "1354",
        "ko": "1483"
    },
    "percentiles4": {
        "total": "3378",
        "ok": "3348",
        "ko": "3493"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 38817,
        "percentage": 4
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 712189,
        "percentage": 68
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 105535,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 187042,
        "percentage": 18
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "562.221",
        "ok": "461.454",
        "ko": "100.767"
    }
},
contents: {
"req_esloadtestposts-7b444": {
        type: "REQUEST",
        name: "EsLoadTestPostSearchSimulation300x30m",
path: "EsLoadTestPostSearchSimulation300x30m",
pathFormatted: "req_esloadtestposts-7b444",
stats: {
    "name": "EsLoadTestPostSearchSimulation300x30m",
    "numberOfRequests": {
        "total": "1043583",
        "ok": "856541",
        "ko": "187042"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "47",
        "ko": "43"
    },
    "maxResponseTime": {
        "total": "60103",
        "ok": "39005",
        "ko": "60103"
    },
    "meanResponseTime": {
        "total": "517",
        "ok": "491",
        "ko": "637"
    },
    "standardDeviation": {
        "total": "990",
        "ok": "817",
        "ko": "1546"
    },
    "percentiles1": {
        "total": "309",
        "ok": "300",
        "ko": "358"
    },
    "percentiles2": {
        "total": "377",
        "ok": "360",
        "ko": "426"
    },
    "percentiles3": {
        "total": "1383",
        "ok": "1354",
        "ko": "1483"
    },
    "percentiles4": {
        "total": "3378",
        "ok": "3348",
        "ko": "3493"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 38817,
        "percentage": 4
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 712189,
        "percentage": 68
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 105535,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 187042,
        "percentage": 18
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "562.221",
        "ok": "461.454",
        "ko": "100.767"
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
