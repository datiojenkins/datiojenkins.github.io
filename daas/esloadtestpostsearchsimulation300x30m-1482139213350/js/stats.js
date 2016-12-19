var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2715288",
        "ok": "178665",
        "ko": "2536623"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "60",
        "ko": "38"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "59729",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "198",
        "ok": "681",
        "ko": "164"
    },
    "standardDeviation": {
        "total": "588",
        "ok": "1204",
        "ko": "501"
    },
    "percentiles1": {
        "total": "91",
        "ok": "383",
        "ko": "91"
    },
    "percentiles2": {
        "total": "98",
        "ok": "450",
        "ko": "96"
    },
    "percentiles3": {
        "total": "1082",
        "ok": "1587",
        "ko": "296"
    },
    "percentiles4": {
        "total": "1841",
        "ok": "4524",
        "ko": "1297"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 149836,
        "percentage": 6
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1731,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 27098,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 2536623,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1483.805",
        "ok": "97.634",
        "ko": "1386.171"
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
        "total": "2715288",
        "ok": "178665",
        "ko": "2536623"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "60",
        "ko": "38"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "59729",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "198",
        "ok": "681",
        "ko": "164"
    },
    "standardDeviation": {
        "total": "588",
        "ok": "1204",
        "ko": "501"
    },
    "percentiles1": {
        "total": "91",
        "ok": "383",
        "ko": "91"
    },
    "percentiles2": {
        "total": "98",
        "ok": "450",
        "ko": "96"
    },
    "percentiles3": {
        "total": "1082",
        "ok": "1587",
        "ko": "296"
    },
    "percentiles4": {
        "total": "1840",
        "ok": "4525",
        "ko": "1297"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 149836,
        "percentage": 6
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1731,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 27098,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 2536623,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1483.805",
        "ok": "97.634",
        "ko": "1386.171"
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
