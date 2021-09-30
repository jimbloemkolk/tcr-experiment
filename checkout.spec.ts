import { checkout } from "./src/checkout"

describe("checkout", () => {
    const priceRules = {
        waterBottle: {
            normal: 20
        }
    }

    let checkoutService;

    beforeEach(() => {
        checkoutService = checkout(priceRules);
    })

    it("should be true", () => {
        expect(true).toBe(true)
    })

    it("should initialize a checkout class", () => {
        // Assert
        expect(checkoutService).toBeTruthy();
    })

    it("should contain a scan method", () => {
        // Assert
        expect(checkoutService.scan).toBeTruthy();
    })

    it("should give the total price when zero items are scanned", () => {
        expect(checkoutService.getTotal()).toBe(0);
    })

    it("should gice the total price when one item is scanned", () => {
        // Act
        checkoutService.scan("waterBottle");

        // Assert
        expect(checkoutService.getTotal()).toBe(20);
    })

    it("should calculate the total when multiple items are added", () => {
        // Act
        checkoutService.scan("waterBottle")
        checkoutService.scan("waterBottle")

        // Assert
        expect(checkoutService.getTotal()).toBe(40);
    })

    it("should get the total of a bulk deal when buying in bulk", () => {
        // Act
        checkoutService.scan("waterBottle")
        checkoutService.scan("waterBottle")
        checkoutService.scan("waterBottle")

        // Assert
        expect(checkoutService.getTotal()).toBe(60)
    })
})