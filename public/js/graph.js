var context = cubism.context()
                    .serverDelay(30 * 1000) // allow 30 seconds of collection lag
                    .step(5 * 60 * 1000) // five minutes per value
                    .size(1920); // fetch 1920 values (1080p)

