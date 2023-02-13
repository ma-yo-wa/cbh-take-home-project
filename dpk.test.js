const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  describe("When event does not exist", () => {
    it("Returns the literal '0' when given no input", () => {
      const trivialKey = deterministicPartitionKey();
      expect(trivialKey).toBe("0");
    });
  });

  describe("When event exist", () => {
    describe("When event has partition key", () => {
      it("Returns the partition key for the given event", () => {
        const trivialKey = deterministicPartitionKey({partitionKey: '123'});
        expect(trivialKey).toBe("123");
      });

      describe("When event's partition key is not a string", () => {
        it("Returns the JSON stringified version of the given event's partition key", () => {
          const nonStringPartitionKey = 123;
          const trivialKey = deterministicPartitionKey({partitionKey: nonStringPartitionKey});
          expect(trivialKey).toBe(JSON.stringify(nonStringPartitionKey));
        });
      });
  
      describe("When the partition key length is greater than the default partition key length", () => {
        it("Returns a generated partition key different from the event's partition key", () => {
          const MAX_PARTITION_KEY_LENGTH = 256;
          const longerPartitionKey = new Array(MAX_PARTITION_KEY_LENGTH + 2).join('a');
          const trivialKey = deterministicPartitionKey({partitionKey: longerPartitionKey});
          expect(trivialKey).not.toBe(longerPartitionKey);
          expect(trivialKey).toBeDefined();
        });
      });
    });

    describe("When event has no partition key", () => {
      it("Returns a generated partition key", () => {
        const trivialKey = deterministicPartitionKey({name: "Event without a partition key"});
        expect(trivialKey).toBeDefined();
      });
    });

  });
});

