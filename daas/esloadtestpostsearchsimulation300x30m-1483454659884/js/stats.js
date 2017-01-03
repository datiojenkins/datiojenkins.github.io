var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1085019",
        "ok": "847340",
        "ko": "237679"
    },
    "minResponseTime": {
        "total": "37",
        "ok": "52",
        "ko": "37"
    },
    "maxResponseTime": {
        "total": "60049",
        "ok": "44482",
        "ko": "60049"
    },
    "meanResponseTime": {
        "total": "496",
        "ok": "500",
        "ko": "480"
    },
    "standardDeviation": {
        "total": "1325",
        "ok": "1056",
        "ko": "2010"
    },
    "percentiles1": {
        "total": "250",
        "ok": "244",
        "ko": "288"
    },
    "percentiles2": {
        "total": "300",
        "ok": "289",
        "ko": "319"
    },
    "percentiles3": {
        "total": "1324",
        "ok": "1317",
        "ko": "1330"
    },
    "percentiles4": {
        "total": "3422",
        "ok": "3424",
        "ko": "3375"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 79097,
        "percentage": 7
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 645635,
        "percentage": 60
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 122608,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 237679,
        "percentage": 22
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "584.587",
        "ok": "456.53",
        "ko": "128.057"
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
        "total": "1085019",
        "ok": "847340",
        "ko": "237679"
    },
    "minResponseTime": {
        "total": "37",
        "ok": "52",
        "ko": "37"
    },
    "maxResponseTime": {
        "total": "60049",
        "ok": "44482",
        "ko": "60049"
    },
    "meanResponseTime": {
        "total": "496",
        "ok": "500",
        "ko": "480"
    },
    "standardDeviation": {
        "total": "1325",
        "ok": "1056",
        "ko": "2010"
    },
    "percentiles1": {
        "total": "250",
        "ok": "244",
        "ko": "288"
    },
    "percentiles2": {
        "total": "300",
        "ok": "289",
        "ko": "319"
    },
    "percentiles3": {
        "total": "1323",
        "ok": "1317",
        "ko": "1330"
    },
    "percentiles4": {
        "total": "3422",
        "ok": "3424",
        "ko": "3375"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 79097,
        "percentage": 7
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 645635,
        "percentage": 60
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 122608,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 237679,
        "percentage": 22
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "584.587",
        "ok": "456.53",
        "ko": "128.057"
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
