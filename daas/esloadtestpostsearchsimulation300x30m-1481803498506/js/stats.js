var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "230037",
        "ok": "78204",
        "ko": "151833"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "62",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "60068",
        "ok": "53384",
        "ko": "60068"
    },
    "meanResponseTime": {
        "total": "403",
        "ok": "618",
        "ko": "292"
    },
    "standardDeviation": {
        "total": "2295",
        "ok": "1470",
        "ko": "2614"
    },
    "percentiles1": {
        "total": "100",
        "ok": "383",
        "ko": "83"
    },
    "percentiles2": {
        "total": "370",
        "ok": "400",
        "ko": "101"
    },
    "percentiles3": {
        "total": "1228",
        "ok": "1429",
        "ko": "300"
    },
    "percentiles4": {
        "total": "3401",
        "ok": "4142",
        "ko": "3100"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 68731,
        "percentage": 30
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 985,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8488,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 151833,
        "percentage": 66
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "632.561",
        "ok": "215.047",
        "ko": "417.514"
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
        "total": "230037",
        "ok": "78204",
        "ko": "151833"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "62",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "60068",
        "ok": "53384",
        "ko": "60068"
    },
    "meanResponseTime": {
        "total": "403",
        "ok": "618",
        "ko": "292"
    },
    "standardDeviation": {
        "total": "2295",
        "ok": "1470",
        "ko": "2614"
    },
    "percentiles1": {
        "total": "100",
        "ok": "383",
        "ko": "84"
    },
    "percentiles2": {
        "total": "370",
        "ok": "400",
        "ko": "101"
    },
    "percentiles3": {
        "total": "1228",
        "ok": "1429",
        "ko": "300"
    },
    "percentiles4": {
        "total": "3401",
        "ok": "4148",
        "ko": "3100"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 68731,
        "percentage": 30
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 985,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8488,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 151833,
        "percentage": 66
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "632.561",
        "ok": "215.047",
        "ko": "417.514"
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
