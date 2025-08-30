export default {
  /**************
  method: shield
  params: packet
  describe: The global shield feature that installs with every agent
  ***************/
  async shield(packet) {
    const shield = await this.methods.sign('shield', 'default', packet);
    return shield;
  },

};
